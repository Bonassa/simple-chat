
import AddPhoto from '../images/addAvatar.png';

export function SignUp(){
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="formHeader">
          <span className="logo" >Chat Aleatório</span>
          <span className="title" >Registre-se</span>
        </div>
        <form>
          <input type='text' placeholder="John Doe" />
          <input type='email' placeholder="johndoe@example.com" />
          <input type='password' placeholder="*********" />
          <input type='file' id="fileInput" style={{ display: 'none' }} />
          <label htmlFor="fileInput">
            <img src={AddPhoto} />
            <span>Adicione uma foto</span>
          </label>
          <button type='submit'>Sign up</button>
        </form>
        <div className="formFooter">
          <p>Já tem uma conta? Entre agora</p>
        </div>
      </div>
    </div>
  )
}