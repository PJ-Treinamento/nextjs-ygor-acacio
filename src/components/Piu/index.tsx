import * as S from './styles';

const Piu = () => {
    // const [like, setLike] = useState(EmptyHeart)
    // const [favorite, setFavorite] = useState(EmptyStar)
    // const [toFollow, setToFollow] = useState(Follow)

    // const {authenticated} = useContext(Context)
    // const {token} = authenticated
    // Criando todas a funções de deletar, dar like, favoritar e seguir
    // const deletePiu = async() => {
    //     try {
    //       const deleteResponse = await Api.delete('/pius',
    //     { data: {piu_id:id}, headers: {authorization:`Bearer ${token}`}}  )
    //     console.log(deleteResponse)
    //     } catch (error) {
    //       console.log(error)
    //     }
    // }

    // const likePiu = async() => {
    //   try {
    //     const likeResponse = await Api.post('/pius/like', {data:{piu_id:id}},
    //   { headers: {authorization:`Bearer ${token}`}}  )
    //   console.log(likeResponse)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // const favoritePiu = async() => {
    //   try {
    //     const favoriteResponse = await Api.post('/pius/favorite', {data:{piu_id:id}},
    //   { headers: {authorization:`Bearer ${token}`}})
    //     console.log(favoriteResponse)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // const follow = async({id}:IUser) => {
    //   try {
    //     const followResponse = await Api.post('/pius/follow', {data:{followed_id:id}},
    //   { headers: {authorization:`Bearer ${token}`}})
    //     console.log(followResponse)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    return (
        <S.PiuBox>
            <S.PiuBoxProfile>
                {/* <S.ImgProfile src={user.photo} alt="Profile" /> */}
                <h2>userfirst_name userlast_name</h2>
                <p>-</p>
                <h3>@userusername</h3>
                <p>-</p>
                <h3>k</h3>
                {/* <S.Icons
                    src={favorite}
                    onClick={() => {
                        setFavorite(GoldenStar)
                        favoritePiu()
                    }}
                    alt="Star"
                /> */}
                {/* <S.Icons
                    src={toFollow}
                    onClick={() => {
                        setToFollow(Following)
                        follow(user)
                    }}
                    alt="Star"
                /> */}
            </S.PiuBoxProfile>

            <S.PiuConteiner>
                <S.Piu>text</S.Piu>
            </S.PiuConteiner>

            <S.PiuInterections>
                {/* <S.Icons
                    src={like}
                    onClick={() => {
                        setLike(FullHeart)
                        likePiu()
                    }}
                    alt="Star"
                /> */}
                <p>likes.length</p>

                {/* <S.Icons src={Baloon} alt="Star" /> */}
                <p>0</p>

                {/* <S.Icons
                    src={DeleteIcon}
                    onClick={() => {
                        deletePiu()
                    }}
                    alt="Star" 
                /> */}
            </S.PiuInterections>
        </S.PiuBox>
    );
};

export default Piu;
