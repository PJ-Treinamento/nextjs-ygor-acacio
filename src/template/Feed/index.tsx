import Piu from 'components/Piu';
import { useState } from 'react';
import * as S from './styles';

const FeedTemplate = () => {
    const [search, setSearch] = useState('');
    const [postPius, setPostPius] = useState('');
    // const [pius, setPius] = useState<IPiu[]>([]);

    // const piusFilter = pius.filter((piu) =>
    // piu.user.first_name.toLocaleLowerCase().includes(search));
    return (
        <div>
            <S.NavBarCenter>
                <S.NavBar>
                    <S.Search>
                        <S.SearchInput
                            type="text"
                            placeholder="Pesquisar"
                            value={search}
                            onChange={(ev) => setSearch(ev.target.value)}
                        />
                        {/* <S.Icons src={IconMagnifying} alt="Magnifying Icon" /> */}
                    </S.Search>
                    {/* <S.LogoPiuPiuwer src={LogoPiuPiuwer} alt="logo do piupiuwer" /> */}
                    <S.MenuBar>
                        <S.IconMenu>
                            {/* <S.Icons
                                src={IconNotification}
                                alt="Notification Icon"
                            /> */}
                            Notifacações
                        </S.IconMenu>
                        <S.IconMenu>
                            {/* <S.Icons src={IconProfile} alt="Profile Icon" /> */}
                            Perfil
                        </S.IconMenu>
                        <S.IconMenu>
                            {/* <S.Icons src={IconConfig} alt="gear Icon" /> */}
                            Configurações
                        </S.IconMenu>
                        {/* <S.IconMenu onClick={Logout}>
                            <S.Icons src={IconExit} alt="Exit Icon" />
                            Sair
                        </S.IconMenu> */}
                    </S.MenuBar>
                </S.NavBar>
            </S.NavBarCenter>

            <S.HeaderCenter>
                <S.Header>
                    <S.Profile>
                        {/* <S.ImgProfile src={user.photo} alt="User profile" /> */}
                        <S.ProfileInfo>
                            <S.Tittle>userfirstname userlastname</S.Tittle>
                            <S.Tittle2>@userusername</S.Tittle2>
                            <S.Tittle2>userabout</S.Tittle2>
                            <S.Tittle2>Following userfollowinglength</S.Tittle2>
                            <S.Tittle2>Followers userfollowerslength</S.Tittle2>
                        </S.ProfileInfo>
                    </S.Profile>
                    <S.PiuPost>
                        <S.Tittle>Que tal escrever um piu agora ?</S.Tittle>
                        <form>
                            <S.WritePiu>
                                {/* <label htmlFor="piu"></label> */}
                                <S.AreaPiu
                                    name="piu"
                                    placeholder="Escreva aqui:"
                                    value={postPius}
                                    onChange={(e) => {
                                        setPostPius(e.target.value);
                                    }}
                                />
                                {/* <S.Button type="submit" onClick={PostPiu}>
                                    Piar ?
                                </S.Button> */}
                            </S.WritePiu>
                        </form>
                    </S.PiuPost>
                </S.Header>
            </S.HeaderCenter>

            <S.Section>
                <Piu />
                {/* {piusFilter.map(piu => <Piu {...piu} key={piu.id}/>)} */}
            </S.Section>
        </div>
    );
};

export default FeedTemplate;
