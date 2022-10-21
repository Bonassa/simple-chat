
export function SignIn(){
  return (
    <div>
      <div className="formContainer">
      <div className="formWrapper">
        <div className="formHeader">
          <span className="logo" >Chat Aleatório</span>
          <span className="title" >Entre</span>
        </div>
        <form>
          <input type='email' placeholder="johndoe@example.com" />
          <input type='password' placeholder="*********" />
          
          <button type='submit'>Sign in</button>
        </form>
        <div className="formFooter">
          <p>Ainda não tem uma conta? Crie uma agora</p>
        </div>
      </div>
    </div>
    </div>
  );
}