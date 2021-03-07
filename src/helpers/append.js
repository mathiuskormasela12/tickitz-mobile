export default function append(formData, data) {
  for (let name in data) {
    console.log(name);
    console.log(data[name]);
    formData.append(name, data[name]);
  }
}
