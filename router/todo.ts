import express from 'express';

const router = express.Router();

router.post("/", function(req: express.Request, res: express.Response, next: express.NextFunction){
    const name = req.body.name;
    
    res.render('todo', {name:name});
});

module.exports = router;
