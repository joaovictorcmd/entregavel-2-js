const RENDA_SALARIO_ANUAL = prompt("Renda anual com salário:");
const RENDA_SERVICO = prompt("Renda anual com prestação de serviço:");
const RENDA_GANHO_CAPITAL = prompt("Renda anual com ganho de capital:");
const GASTO_MEDICO = prompt("Gastos médicos:");
const GASTO_EDUCACIONAL = prompt("Gastos educacionais:");

const SALARIO_MENSAL = RENDA_SALARIO_ANUAL / 12;

// Imposto sobre salário
let impostoSalario = 0;
if (SALARIO_MENSAL < 3000) {
  impostoSalario = 0;
} else if (SALARIO_MENSAL >= 3000 && SALARIO_MENSAL < 5000) {
  impostoSalario = 0.1;
} else {
  impostoSalario = 0.2;
}

impostoSalario *= RENDA_SALARIO_ANUAL;

// Imposto sobre prestação de serviços
const IMPOSTO_SERVICO = RENDA_SERVICO * 0.15;

// Imposto sobre ganho de capital
const IMPOSTO_GANHO_CAPITAL = RENDA_GANHO_CAPITAL * 0.2;

const IMPOSTO_BRUTO = impostoSalario + IMPOSTO_SERVICO + IMPOSTO_GANHO_CAPITAL;

// Abatimento
const MAXIMO_DEDUTIVEL = IMPOSTO_BRUTO * 0.3;
const GASTOS_DEDUTIVEIS =
  parseFloat(GASTO_MEDICO) + parseFloat(GASTO_EDUCACIONAL);

let abatimento = 0;
if (GASTOS_DEDUTIVEIS > MAXIMO_DEDUTIVEL) {
  abatimento = IMPOSTO_BRUTO * 0.3;
} else {
  abatimento = GASTOS_DEDUTIVEIS;
}

const IMPOSTO_LIQUIDO = IMPOSTO_BRUTO - abatimento;

alert(
  `CONSOLIDADO DE RENDA:\nImposto sobre salário: R$ ${impostoSalario.toFixed(
    2
  )}\nImposto sobre serviços: R$ ${IMPOSTO_SERVICO.toFixed(
    2
  )}\nImposto sobre ganho de capital: R$ ${IMPOSTO_GANHO_CAPITAL.toFixed(2)}`
);
alert(
  `DEDUÇÕES:\nMáximo dedutível: R$ ${MAXIMO_DEDUTIVEL.toFixed(
    2
  )}\nGastos dedutíveis: R$ ${GASTOS_DEDUTIVEIS.toFixed(2)}`
);
alert(
  `RESUMO:\nImposto bruto total: R$ ${IMPOSTO_BRUTO.toFixed(
    2
  )}\nAbatimento: R$ ${abatimento.toFixed(
    2
  )}\nImposto devido: R$ ${IMPOSTO_LIQUIDO.toFixed(2)}`
);
