

export default class UserController{

    renderHomePage(req, res){
        res.render('home');
    }

    renderContactPage(req, res){
        res.render('contact');
    }
}