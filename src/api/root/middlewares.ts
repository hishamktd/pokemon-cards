import { authApi } from '../auth/auth.api';
import { fileUploadApi } from '../file-upload/file-upload.api';
import { expansionApi } from '../masters/expansion.api';
import { typesApi } from '../masters/types.api';
import { pokemonApi } from '../pokemon/pokemon.api';

const middleWares = [
  authApi.middleware,
  expansionApi.middleware,
  fileUploadApi.middleware,
  typesApi.middleware,
  pokemonApi.middleware,
];

export default middleWares;
