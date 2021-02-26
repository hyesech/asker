// Immer ie에서 돌아가도록
import produce, { enableES5 } from 'immer';

export default (...args) => {
  enableES5();
  return produce(...args);
};
