const getListStudentsIds = (inarray) => {
  let outarray = [];
  if ((inarray instanceof Array)) {
    outarray = inarray.map((item) => item.id);
  }
  return outarray;
};

export default getListStudentIds;
