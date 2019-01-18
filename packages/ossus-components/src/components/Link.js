import React from 'react';
import { Routes } from 'ossus';

function Link({ href, route, params, children, prefetch, as, ...rest }) {
  const LinkComp = as || 'a';
  if (href) {
    return <LinkComp href={href} {...rest}>{children}</LinkComp>;
  }
  // Dynamic Route
  return (
    <Routes.Link route={route} params={params} prefetch={prefetch}>
      <LinkComp {...rest}>{children}</LinkComp>
    </Routes.Link>
  );
}

export default Link;