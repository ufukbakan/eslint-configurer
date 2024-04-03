function merge(obj1, obj2) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return [...obj1, ...obj2];
  } else if (Array.isArray(obj1)) {
    return [...obj1, obj2];
  } else if (Array.isArray(obj2)) {
    return [obj1, ...obj2];
  }

  const merged = { ...obj1 };

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null) {
        if (Array.isArray(merged[key])) {
          merged[key] = merged[key].concat(obj2[key]);
        } else if (typeof merged[key] === "object" && merged[key] !== null) {
          merged[key] = merge(merged[key], obj2[key]);
        } else {
          merged[key] = obj2[key];
        }
      } else {
        merged[key] = obj2[key];
      }
    }
  }

  return merged;
}

function mergeDeep(...objects) {
  return objects.reduce((merged, obj) => merge(merged, obj), {});
}

module.exports = {
  mergeDeep,
};
