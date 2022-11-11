import './style.css';

const button = document.querySelector('.btn-send');
const paragraph = document.querySelector('.paragraph');

async function getData(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  return data;
}

button.addEventListener('click', async () => {
  const input = document.querySelector('.input');
  const inputCep = input.value;
  try {
    const data = Object.values(await getData(inputCep));
    const text = `${data[0]}\n${data[1]}, ${data[2]}\n${data[3]}, ${data[4]}, ${data[4]}`;
    paragraph.classList.remove('error');
    paragraph.innerText = text;
  } catch (error) {
    paragraph.innerText = 'Erro: CEP não existe!';
    paragraph.classList.add('error');
  }
  input.value = '';
});
