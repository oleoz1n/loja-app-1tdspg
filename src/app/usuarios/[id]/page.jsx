import Link from "next/link";

async function getAll(){
    let usuarios;
    try{
        const response = await fetch(`http://localhost:3000/api/base/base-users/0`);
        usuarios = await response.json();
    }catch(error){
        console.log();
    }

    return (
        <>
        <h1 className="text-xl">Lista de Usuários</h1>
        <div>
        <table className="border-collapse border w-2/3 m-auto">
    <thead>
        <tr className="linhaCabecalho">
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
        </tr>
    </thead>
    <tbody>
        {usuarios.map((usuario)=>(
            <tr className="linhaCorpo"  key={usuario.id}>
                <td><Link href={`http://localhost:3000/usuarios/${usuario.id}`}>{usuario.name}</Link></td>
                <td>{usuario.email}</td>
                <td>{usuario.password}</td>
            </tr>
        ))}
    </tbody>
</table>

    </div>
    </>
    );
}

async function getById(id){
    let usuario;
    try{
        const response = await fetch(`http://localhost:3000/api/base/base-users/${id}`);
        usuario = await response.json();
    }catch(error){
        console.log();
    }
    return (
        <>
        <h1 className="text-xl">Usuário</h1>
        <div>
            <h1>Nome: {usuario.name}</h1>
            <h1>Email: {usuario.email}</h1>
            <h1>Senha: {usuario.password}</h1>
        </div>
        </>
    );
}


export default async function UsuariosView({params}) {
    let usuarios;
    try{
        const response = await fetch(`http://localhost:3000/api/base/base-users/0`);
        usuarios = await response.json();
    }catch(error){
        console.log();
    }

  return (
    <div className="text-center flex justify-center align-center flex-col p-4">
        {params.id > 0 && params.id <= usuarios.length ? getById(params.id) : params.id == 0 ? getAll() : <h1>Usuário não encontrado</h1>}
    </div>
  )
}
