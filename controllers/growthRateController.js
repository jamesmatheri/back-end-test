const pool = require('../db/pool')



exports.growthrate_list_get = async (req, res, next) => {
  
   try {
    const {rows} = await pool.query("SELECT * FROM monthly_data");  
     res.status(200).json({data:rows});
   } catch (error) {
    throw new Error(err)
   }
  } 

  exports.growthrate_update_post = async (req, res, next) => {
  let updates = req.body
    if (!updates || typeof updates !== 'object') {
      throw new Error('Invalid updates format - expected an object');
    }

   try {
     for (const { index, value } of Object.values(updates)) {
       

          await pool.query(
        `UPDATE monthly_data  
         SET growthrate = $1 
         WHERE id = $2`,
        [value, index]
      );
         res.status(200).json({
      success: true,
      message: `${Object.keys(updates).length} records updated successfully`
    });
    
     }

   } catch (error) {   throw new Error(err)
   }
  } 
  