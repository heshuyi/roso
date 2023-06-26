class login {
  constructor(){
  }
  async getLoginIn(ctx,next){
    console.log(ctx);
    ctx.response.body = {
      state:1,
      message:'success'
    }
  }
}
module.exports = login;