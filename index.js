'use strict';

/**
 * isolated middleware
 * 
 * @return {Function} isolated middleware
 * @api public
 */
module.exports = function() {
  return function isolated(ctx, next) {
    ctx.set('Cross-Origin-Opener-Policy', 'same-origin');
    ctx.set('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  };
};
