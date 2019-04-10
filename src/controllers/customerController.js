const controller = {};
controller.list = (req, res) => {
  req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM comunicacion', (error, casos) => {
      if (err) {
        res.json(err);
      }

      res.render('casos', {
        data: casos
      });
    });
  });
};


controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO comunicacion set ?', [data], (err, casos) => {
      console.log(casos);
      res.redirect('/');
    });
  })
};
controller.edit = (req, res) =>{
  const { com_id } = req.params;
  req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM comunicacion WHERE com_id = ?', [com_id], (err,casos) =>{
      console.log(casos);
      res.render('caso_edit', {
        data:casos[0]
      });
    });
  });
};

controller.update = (req,res) => {
  const { com_id } = req.params;
  const newCaso = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE comunicacion set ? WHERE com_id = ?', [newCaso, com_id], (err, rows) => {
      res.redirect('/');
    });
  });

};
controller.delete = (req, res) => {
  //desde request.params quiero su propiedad id_com
  const { com_id } = req.params;
  req.getConnection((err, conn) =>{
    conn.query('DELETE FROM comunicacion WHERE com_id = ?', [com_id], (err, rows) => {
      res.redirect('/');
    });
  })
};
module.exports = controller
