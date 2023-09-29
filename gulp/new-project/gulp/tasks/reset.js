import del from "del";

export const reset = () => {
  return del(app.path.clean);
  // return del(app.path.build);
  // return del(build);
}

// export default reset;