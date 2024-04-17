const Link = ({ children, ...props }: Hono.AnchorHTMLAttributes) => {
  return (
    <a {...props} class={`${props.class}`}>
      {children}
    </a>
  );
};

export default Link;
