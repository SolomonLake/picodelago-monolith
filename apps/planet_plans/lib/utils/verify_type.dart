// doesn't work
SubType verifyType<ParentType, SubType extends ParentType>(
    ParentType obj, SubType classType) {
  if (obj is SubType) {
    return obj;
  } else {
    throw ("verifyType: failed to verify narrower sub type");
  }
}
