import React, { useEffect, useState } from 'react';
import { ARRAY_CATEGORIAS } from '../constantes';
import { ARRAY_PAISES } from '../constantes';

const Formulario = ({ getCategoria, getPais }) => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor='categoria'>Buscar por categoria</label>
          <select
            name='categoria'
            onChange={(event) => {
              getCategoria(event.target.value);
            }}
          >
            {ARRAY_CATEGORIAS.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='pais'>Seleccione el pais</label>
          <select
            name='pais'
            onChange={(event) => {
              getPais(event.target.value);
            }}
          >
            {ARRAY_PAISES.map((pais) => (
              <option value={pais} key={pais}>
                {pais}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
