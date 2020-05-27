import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [submit, setSubmit] = useState(false);

  const handleSetParam = (event, param) => {
    const { value } = event.target;

    switch (param) {
      case 'name':
        setName(value); break;
      case 'avatar':
        setAvatar(value); break;
      case 'username':
        setUsername(value); break;
      case 'email':
        setEmail(value); break;
    }
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: postObject
    }).then(() => setSubmit(true));
  };


  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar ?
                  <img src={avatar} alt="" />
                  : <img
                    src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                    alt=""
                  />
                }
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Ex: Fulano de Tal"
              onChange={(event) => handleSetParam(event, name)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="Ex: fulano_de_tal"
              onChange={(event) => handleSetParam(event, username)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Ex: fulano@provedor.com"
              onChange={(event) => handleSetParam(event, email)}
            />

            <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input
              type="text"
              value={avatar}
              placeholder="http://..."
              onChange={(event) => handleSetParam(event, avatar)}
            />

            <button
              type="button"
              onClick={(event) => handleAddUser(event)}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;
