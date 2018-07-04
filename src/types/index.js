// Centralized propType definitions
import { shape, bool, string } from 'prop-types';

export const node = shape({
  url: string,
  online: bool,
  name: string,
  loading: bool
});
