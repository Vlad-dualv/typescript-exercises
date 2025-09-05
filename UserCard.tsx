export interface User {
    name: string;
    age: number;
    email: string;
    avatar?: string;
}

export default function UserCard({name, age, email, avatar}: User) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
            {avatar && (
                <img src={avatar} alt="avatar" width={40} height={40}/>
            )}
        </div>
    )
}

