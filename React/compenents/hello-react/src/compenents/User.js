// function User (props) {

//     return (
//         <h1>
//             {
//             props.isLogin ? `${props.name} ${props.surname}` : 'Giriş yapmadınız'
//             }
//         </h1>
        
//     )
// }

import PropTypes from "prop-types"
function User ({name, surname, isLogin, age, friends, adress}) {

    return (
        <>
        <h1>
            {
                isLogin ? `${name} ${surname} ${age}` : 'Giriş yapmadınız'
            }
        </h1>
            <br />
        {
            `${adress.title} ${adress.zip}`
        }
            <br />
        {
            friends.map((friend, index) => <div key = {index}>{index}-{friend}</div>)
        }
        </>
        
    )
}
User.propTypes = {
    name: PropTypes.string.isRequired,//girilmesi zorunlu hale geldi
    surname:PropTypes.string,
    isLogin: PropTypes.bool,
    age:PropTypes.oneOfType([//birden fazla tip gönderebiliriz
        PropTypes.string,
        PropTypes.number
    ]),
    friends:PropTypes.array,
    adress:PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    isLogin: false
}
export default User;