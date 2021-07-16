import * as S from './styles';
import LogoPiupiuwer from '../../assets/logo-PP.svg';

const LoginTemplate = () => (
    <S.LoginScreen>
        <S.NavBar>
            <S.LogoPiuPiuwer src={LogoPiupiuwer} alt="piupiuwer" />
        </S.NavBar>

        <form>
            <S.Section>
                <S.LoginBox>
                    <S.Tittle> Faça seu login </S.Tittle>
                    {/* <label htmlFor="email"></label> */}
                    <S.LoginInput
                        placeholder="Email:"
                        name="email"
                        type="text"
                        // value={credentials.email}
                        // onChange={HendleInputChange}
                    />
                    {/* <label htmlFor="password"></label> */}
                    <S.LoginInput
                        placeholder="Senha:"
                        name="password"
                        type="text"
                        // value={credentials.password}
                        // onChange={HendleInputChange}
                    />
                    <S.Button type="submit">Entrar</S.Button>
                    {/* <Link to='/esquici-minha-senha'>
                    <S.P colorFooter={false} cursorFooter >Esqueci minha senha</S.P>
                    </Link>
                    <Link to='/registrar' >
                    <S.P colorFooter={false} cursorFooter >Não tenho cadastro</S.P>
                    </Link> */}
                </S.LoginBox>
            </S.Section>
        </form>
    </S.LoginScreen>
);
export default LoginTemplate;
