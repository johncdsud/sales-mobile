/ *!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Inclui Sizzle.js
 * https://sizzlejs.com/
 *
 * Fundação JS de direitos autorais e outros colaboradores
 * Lançado sob a licença MIT
 * https://jquery.org/license
 *
 * Data: 2018-01-20T17: 24Z
 * /
(função (global, fábrica) {

	"use strict";

	if (tipo de módulo === "objeto" && typeof module.exports === "objeto") {

		// Para ambientes CommonJS e CommonJS, onde uma `janela` apropriada
		// está presente, executa a fábrica e obtém o jQuery.
		// Para ambientes que não possuem uma `janela` com um documento
		// (como Node.js), exponha uma fábrica como module.exports.
		// Isto acentua a necessidade da criação de uma `janela 'real.
		// por exemplo var jQuery = require ("jquery") (janela);
		// Veja o bilhete # 14549 para mais informações.
		module.exports = global.document?
			factory (global, true):
			função (w) {
				if (! w.document) {
					throw new Error ("jQuery requer uma janela com um documento");
				}
				retorno de fábrica (w);
			};
	} outro {
		fábrica (global);
	}

// Passar esta se a janela ainda não está definida
}) (janela typeof window == "undefined"?: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lança exceções quando o código não estrito (por exemplo, ASP.NET 4.5) acessa o modo estrito
// arguments.callee.caller (trac-13335). Mas a partir do jQuery 3.0 (2016), o modo estrito deve ser comum
// o suficiente para que todas essas tentativas sejam guardadas em um bloco try.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (objeto);

suporte var = {};

var isFunction = função isFunction (obj) {

      // Suporte: Chrome <= 57, Firefox <= 52
      // Em alguns navegadores, typeof retorna "function" para elementos HTML <object>
      // (isto é, `typeof document.createElement (" object ") ===" function "`).
      // Não queremos classificar * qualquer * nó DOM como uma função.
      return typeof obj === "function" && tipoof obj.nodeType! == "numero";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		tipo: verdadeiro
		src: true,
		noModule: true
	};

	função DOMEval (código, doc, nó) {
		doc = doc || documento;

		var i,
			script = doc.createElement ("script");

		script.text = código;
		if (node) {
			para (i em preservadosScriptAtributos) {
				if (nó [i]) {
					script [i] = nó [i];
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


function toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Suporte: Android <= 2.3 apenas (functionExplexp)
	return typeof obj === "objeto" || typeof obj === "function"?
		class2type [toString.call (obj)] || "objeto":
		typeof obj;
}
/ * símbolo global * /
// Definir este global em .eslintrc.json criaria o perigo de usar o global
// desprotegido em outro lugar, parece mais seguro definir global apenas para este módulo



var
	versão = "3.3.1",

	// Definir uma cópia local do jQuery
	jQuery = function (seletor, contexto) {

		// O objeto jQuery é na verdade apenas o construtor init 'enhanced'
		// Precisa de init se jQuery for chamado (apenas permita que o erro seja lançado se não for incluído)
		return new jQuery.fn.init (seletor, contexto);
	}

	// Suporte: Android <= 4.0 apenas
	// Certifique-se de que cortamos o BOM e o NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// A versão atual do jQuery sendo usada
	jquery: versão

	construtor: jQuery,

	// O comprimento padrão de um objeto jQuery é 0
	comprimento: 0,

	toArray: function () {
		return slice.call (isso);
	}

	// Obtém o N-ésimo elemento no conjunto de elementos correspondente OU
	// Obtém o elemento inteiro combinado definido como um array limpo
	get: function (num) {

		// Retorna todos os elementos em um array limpo
		if (num == null) {
			return slice.call (isso);
		}

		// Retorna apenas o único elemento do conjunto
		return num <0? isso [num + this.length]: this [num];
	}

	// Pegue uma matriz de elementos e empurre-a para a pilha
	// (retornando o novo conjunto de elementos correspondente)
	pushStack: function (elems) {

		// Construir um novo conjunto de elementos jQuery correspondido
		var ret = jQuery.merge (this.constructor (), elems);

		// Adiciona o objeto antigo na pilha (como referência)
		ret.prevObject = isto;

		// Retorna o conjunto de elementos recém formado
		retorno ret;
	}

	// Executa um retorno de chamada para cada elemento no conjunto correspondente.
	each: function (callback) {
		return jQuery.each (isso, retorno de chamada);
	}

	map: function (callback) {
		return this.pushStack (jQuery.map (isso, função (elem, i) {
			return callback.call (elem, i, elem);
		}));
	}

	slice: function () {
		return this.pushStack (slice.apply (isto, argumentos));
	}

	primeiro: function () {
		return this.eq (0);
	}

	last: function () {
		return this.eq (-1);
	}

	eq: function (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		return this.pushStack (j> = 0 && j <len? [este [j]]: []);
	}

	end: function () {
		return this.prevObject || this.constructor ();
	}

	// Apenas para uso interno.
	// se comporta como o método de uma matriz, não como um método jQuery.
	empurre empurre,
	ordenar: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	opções var, nome, src, copy, copyIsArray, clone,
		alvo = argumentos [0] || {}
		i = 1,
		length = arguments.length,
		deep = false;

	// Lidar com uma situação de cópia profunda
	if (tipo de alvo === "booleano") {
		profundo = alvo;

		// Pula o booleano e o alvo
		alvo = argumentos [i] || {};
		i ++;
	}

	// Manipula maiúsculas e minúsculas quando o alvo é uma string ou algo assim (possível em cópia profunda)
	if (tipo de alvo! == "objeto" &&! isFunction (target)) {
		target = {};
	}

	// Estender o próprio jQuery se apenas um argumento for passado
	if (i === length) {
		target = this;
		Eu--;
	}

	for (; i <comprimento; i ++) {

		// Apenas lidar com valores não nulos / indefinidos
		if ((options = argumentos [i])! = null) {

			// Estende o objeto base
			para (nome em opções) {
				src = target [name];
				copy = opções [nome];

				// Previne o loop sem fim
				if (target === copy) {
					continuar;
				}

				// Recurse se estivermos mesclando objetos ou matrizes simples
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copy)))) {

					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray (src)? src: [];

					} outro {
						clone = src && jQuery.isPlainObject (src)? src: {};
					}

					// Nunca mova objetos originais, clone-os
					target [name] = jQuery.extend (deep, clone, copy);

				// Não traga valores indefinidos
				} else if (copy! == undefined) {
					target [name] = copy;
				}
			}
		}
	}

	// Retorna o objeto modificado
	meta de retorno;
};

jQuery.extend ({

	// Único para cada cópia de jQuery na página
	expando: "jQuery" + (versão + Math.random ()) .replace (/ \ D / g, ""),

	// Assume que o jQuery está pronto sem o módulo pronto
	isReady: true

	erro: function (msg) {
		lançar novo erro (msg);
	}

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Detectar negativos óbvios
		// Use toString em vez de jQuery.type para capturar objetos host
		if (! obj || toString.call (obj)! == "[objeto objeto]") {
			retorna falso;
		}

		proto = getProto (obj);

		// Objetos sem protótipo (por exemplo, `Object.create (null)`) são simples
		if (! proto) {
			retorno verdadeiro;
		}

		// Objetos com protótipo são simples, se foram construídos por uma função global Object
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		return typeof Ctor === "function" && fnToString.call (Ctor) === ObjectFunctionString;
	}

	isEmptyObject: function (obj) {

		/ * eslint-disable no-unused-vars * /
		// Veja https://github.com/eslint/eslint/issues/6125
		nome var;

		para (nome em obj) {
			retorna falso;
		}
		retorno verdadeiro;
	}

	// Avalia um script em um contexto global
	globalEval: function (code) {
		DOMEval (código);
	}

	each: function (obj, retorno de chamada) {
		var comprimento, i = 0;

		if (isArrayLike (obj)) {
			length = obj.length;
			for (; i <comprimento; i ++) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					pausa;
				}
			}
		} outro {
			para (i em obj) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					pausa;
				}
			}
		}

		return obj;
	}

	// Suporte: Android <= 4.0 apenas
	trim: function (text) {
		texto de retorno == null?
			"":
			(texto + "") .replace (rtrim, "");
	}

	// os resultados são apenas para uso interno
	makeArray: function (arr, results) {
		var ret = resultados || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "string"?
					[arr]: arr
				);
			} outro {
				push.call (ret, arr);
			}
		}

		retorno ret;
	}

	inArray: function (elem, arr, i) {
		return arr == null? -1: indexOf.call (arr, elem, i);
	}

	// Suporte: Android <= 4.0 apenas, somente PhantomJS 1
	// push.apply (_, arraylike) é lançado no antigo WebKit
	merge: function (primeiro, segundo) {
		var len = + segundo.length
			j = 0,
			i = primeiro.length;

		para (; j <len; j ++) {
			primeiro [i ++] = segundo [j];
		}

		first.length = i;

		retornar primeiro;
	}

	grep: function (elems, callback, invertido) {
		var callbackInverse,
			matches = [],
			i = 0,
			comprimento = elems.length,
			callbackExpect =! invertido;

		// Passa pela matriz, salvando apenas os itens
		// que passa a função de validador
		for (; i <comprimento; i ++) {
			callbackInverse =! retorno de chamada (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				matches.push (elems [i]);
			}
		}

		retornar correspondências;
	}

	// arg é apenas para uso interno
	map: function (elems, callback, arg) {
		var comprimento, valor
			i = 0,
			ret = [];

		// Percorre o array, traduzindo cada um dos itens para seus novos valores
		if (isArrayLike (elems)) {
			comprimento = elems.length;
			for (; i <comprimento; i ++) {
				valor = retorno de chamada (elems [i], i, arg);

				if (valor! = nulo) {
					ret.push (valor);
				}
			}

		// Passa por todas as chaves do objeto
		} outro {
			para (i em elems) {
				valor = retorno de chamada (elems [i], i, arg);

				if (valor! = nulo) {
					ret.push (valor);
				}
			}
		}

		// Achatar quaisquer matrizes aninhadas
		return concat.apply ([], ret);
	}

	// Um ​​contador GUID global para objetos
	guid: 1,

	// jQuery.support não é usado no Core, mas outros projetos anexam seus
	// propriedades para que ele precise existir.
	suporte: suporte
});

if (typeof Symbol === "function") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Preencha o mapa class2type
jQuery.each ("Boolean Number String Function Matriz Data RegExp Objeto Símbolo de Erro" .split (""),
function (i, name) {
	class2type ["[objeto" + nome + "]"] = name.toLowerCase ();
});

function isArrayLike (obj) {

	// Suporte: iOS 8.2 real (não reproduzível no simulador)
	// `in` check usado para evitar o erro JIT (gh-2145)
	// hasOwn não é usado aqui devido a falsos negativos
	// em relação ao comprimento do Nodelist no IE
	var length = !! obj && "length" em obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		retorna falso;
	}

	tipo de retorno === "array" || comprimento === 0 ||
		typeof length === "number" && length> 0 && (length - 1) em obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation e outros colaboradores
 * Lançado sob a licença MIT
 * http://jquery.org/license
 *
 * Data: 2016-08-08
 * /
(função (janela) {

var i,
	Apoio, suporte,
	Expr
	getText,
	isXML,
	tokenize
	compilar,
	selecione,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Documento local vars
	setDocument,
	documento,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	fósforos,
	contém,

	// Dados específicos da instância
	expando = "sizzle" + 1 * nova data (),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	sortOrder = função (a, b) {
		if (a === b) {
			hasDuplicate = true;
		}
		return 0;
	}

	// Instance methods
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use um indexOf despojado, pois é mais rápido que o nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function (list, elem) {
		var i = 0,
			len = list.length;
		para (; i <len; i ++) {
			if (listar [i] === elem) {
				return i;
			}
		}
		return -1;
	}

	booleans = "checked | selected | async | autofocus | autoplay | controls | defer | disabled | oculto | ismap | loop | multiple | aberto | readonly | obrigatório | escopo",

	// Expressões regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	espaço em branco = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +",

	// Seletores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	Atributos = "\\ [" + espaço em branco + "* (" + identificador + ") (?:" + espaço em branco +
		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)" + espaço em branco +
		// "Os valores dos atributos devem ser identificadores CSS [captura 5] ou sequências [captura 3 ou captura 4]"
		"* (?: '((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\ "] ) *) \ "| (" + identificador + ")) |)" + espaço em branco +
		"* \\]",

	pseudos = ":(" + identificador + ") (?: \\ ((" +
		// Para reduzir o número de seletores que precisam de tokenize no preFilter, prefira os argumentos:
		// 1. citado (captura 3; captura 4 ou captura 5)
		"('((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +
		// 2. simples (captura 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + atributos + ") *) |" +
		// 3. qualquer outra coisa (captura 2)
		". *" +
		") \\) |)",

	// Espaço em branco no final e não-escapado, capturando alguns caracteres que não são espaços em branco antes do último
	rwhitespace = new RegExp (espaços em branco + "+", "g"),
	rtrim = new RegExp ("^" + espaço em branco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + espaço em branco + "+ $", "g "),

	rcomma = new RegExp ("^" + espaço em branco + "*", + espaço em branco + "*"),
	rcombinators = new RegExp ("^" + espaço em branco + "* ([> + ~] |" + espaço em branco + ")" + espaço em branco + "*"),

	rattributeQuotes = new RegExp ("=" + espaço em branco + "* ([^ \\] '\"] *?) "+ espaço em branco +" * \\] "," g "),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identificador + "$"),

	matchExpr = {
		"ID": new RegExp ("^ # (" + identificador + ")"),
		"CLASS": new RegExp ("^ \\. (" + Identificador + ")"),
		"TAG": new RegExp ("^ (" + identificador + "| [*])"),
		"ATTR": new RegExp ("^" + atributos),
		"PSEUDO": new RegExp ("^" + pseudos),
		"CHILD": new RegExp ("^ :( apenas | primeiro | último | nth | nth-last) - (filho | do-type) (?: \\ (" + espaço em branco +
			"* (par | ímpar | (([+ -] |) (\\ d *) n |)" + espaço em branco + "* (?: ([+ -] |)" + espaço em branco +
			"* (\\ d +) |))" + espaço em branco + "* \\) |)", "i"),
		"bool": new RegExp ("^ (?:" + booleanos + ") $", "i"),
		// Para uso em bibliotecas implementando .is ()
		// Usamos isso para correspondência de PDV em `select`
		"needsContext": new RegExp ("^" + espaço em branco + "* [> + ~] |: (par | ímpar | eq | gt | lt | nth | primeiro | último) (?: \\ (" +
			espaço em branco + "* ((?: - \\ d)? \\ d *)" + espaço em branco + "* \\) |) (? = [^ -] | $)", "i")
	}

	rinputs = / ^ (?: input | select | textarea | botão) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /,

	// IDs facilmente pesquisáveis ​​/ recuperáveis ​​ou seletores TAG ou CLASS
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS escapa
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ( "\\\\ ([\\ da-f] {1,6}" + espaço em branco + "|? (" + espaço em branco + ") |.)", "ig"),
	funescape = function (_, escaped, escapedWhitespace) {
		var high = "0x" + escape - 0x10000;
		// NaN significa não-codepoint
		// Suporte: Firefox <24
		// Solução alternativa de interpretação numérica errônea de + "0x"
		volte alto! == alto || escapouWhitepace?
			escapou:
			alto <0?
				// Codepoint do BMP
				String.fromCharCode (alta + 0x10000):
				// Código de plano do plano suplementar (par substituto)
				String.fromCharCode (alta >> 10 | 0xD800, alta e 0x3FF | 0xDC00);
	}

	// serialização de string / identificador CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL se torna U + FFFD CHARACTER DE SUBSTITUIÇÃO
			if (ch === "\ 0") {
				return "\ uFFFD";
			}

			// Caracteres de controle e números (dependentes da posição) escapam como pontos de código
			return ch.slice (0, -1) + "\\" + ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Outros caracteres ASCII potencialmente especiais recebem escape de barra invertida
		return "\\" + ch;
	}

	// Usado para iframes
	// Veja setDocument ()
	// Remover o wrapper de função causa uma "Permissão negada"
	// erro no IE
	unloadHandler = function () {
		setDocument ();
	}

	disabledAncestor = addCombinator (
		função (elem) {
			return elem.disabled === true && ("form" no elem || "label" no elem);
		}
		{dir: "parentNode", próximo: "legend"}
	);

// Optimize para push.apply (_, NodeList)
experimentar {
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);
	// Suporte: Android <4.0
	// Detectar falha silenciosamente push.apply
	arr [preferredDoc.childNodes.length] .nodeType;
} pegar (e) {
	push = {aplicar: arr.length?

		// Alavancar fatia, se possível
		function (target, els) {
			push_native.apply (target, slice.call (els));
		}:

		// Suporte: IE <9
		// Caso contrário, acrescentar diretamente
		function (target, els) {
			var j = target.length,
				i = 0;
			// Não é possível confiar em NodeList.length
			while ((target [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

função Sizzle (seletor, contexto, resultados, semente) {
	var m, eu, elem, nid, jogo, grupos, newSelector,
		newContext = context && context.ownerDocument,

		// o padrão nodeType é 9, já que o contexto é padronizado para documentar
		nodeType = contexto? context.nodeType: 9;

	resultados = resultados || [];

	// Retorna cedo das chamadas com seletor ou contexto inválido
	if (tipo de seletor! == "string" ||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		retornar resultados;
	}

	// Tente atalho localizar operações (em oposição a filtros) em documentos HTML
	if (! seed) {

		if ((context? context.ownerDocument || context: preferredDoc)! == document) {
			setDocument (contexto);
		}
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Se o seletor for suficientemente simples, tente usar um método DOM "get * By *"
			// (exceto o contexto DocumentFragment, onde os métodos não existem)
			if (nodeType! == 11 && (match = rquickExpr.exec (seletor)))) {

				// seletor de ID
				if ((m = corresponde [1])) {

					// Contexto do documento
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Suporte: IE, Opera, Webkit
							// TODO: identificar versões
							// getElementById pode corresponder elementos por nome em vez de ID
							if (elem.id === m) {
								results.push (elem);
								retornar resultados;
							}
						} outro {
							retornar resultados;
						}

					// Contexto do elemento
					} outro {

						// Suporte: IE, Opera, Webkit
						// TODO: identificar versões
						// getElementById pode corresponder elementos por nome em vez de ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contém (contexto, elem) &&
							elem.id === m) {

							results.push (elem);
							retornar resultados;
						}
					}

				// Digite o seletor
				} else if (match [2]) {
					push.apply (resultados, context.getElementsByTagName (selector));
					retornar resultados;

				// Seletor de classe
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (resultados, context.getElementsByClassName (m));
					retornar resultados;
				}
			}

			// Aproveite o querySelectorAll
			if (support.qsa &&
				! compiladorCache [seletor + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (seletor)))) {

				if (nodeType! == 1) {
					newContext = contexto;
					newSelector = seletor;

				// qSA procura fora do contexto do elemento, que não é o que queremos
				// Agradece a Andrew Dupont por essa técnica de solução alternativa
				// Suporte: IE <= 8
				// Exclude elementos do objeto
				} else if (context.nodeName.toLowerCase ()! == "objeto") {

					// Capture o ID do contexto, configurando-o primeiro, se necessário
					if ((nid = context.getAttribute ("id")))) {
						nid = nid.replace (rcssescape, fcssescape);
					} outro {
						context.setAttribute ("id", (nid = expando));
					}

					// Prefixo cada seletor na lista
					grupos = tokenize (seletor);
					i = groups.length;
					enquanto eu-- ) {
						grupos [i] = "#" + nid + "" + toSelector (grupos [i]);
					}
					newSelector = groups.join (",");

					// Expandir contexto para seletores irmãos
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;
				}

				if (newSelector) {
					experimentar {
						push.apply (resultados,
							newContext.querySelectorAll (newSelector)
						);
						retornar resultados;
					} catch (qsaError) {
					} finalmente {
						if (nid === expando) {
							context.removeAttribute ("id");
						}
					}
				}
			}
		}
	}

	// Todos os outros
	return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semente);
}

/ **
 * Crie caches de valores-chave de tamanho limitado
 * @returns {function (string, object)} Retorna os dados do Objeto depois de armazená-los em si mesmo com
 * nome da propriedade a string (com espaço sufixo) e (se a cache for maior que Expr.cacheLength)
 * Excluindo a entrada mais antiga
 * /
function createCache () {
	var keys = [];

	cache de funções (chave, valor) {
		// Use (chave + "") para evitar a colisão com propriedades nativas do protótipo (consulte o número 157)
		if (keys.push (key + "")> Expr.cacheLength) {
			// Mantenha apenas as entradas mais recentes
			delete cache [keys.shift ()];
		}
		return (cache [chave + ""] = valor);
	}
	cache de retorno;
}

/ **
 * Marque uma função para uso especial por Sizzle
 * @param {Função} fn A função para marcar
 * /
função markFunction (fn) {
	fn [expando] = true;
	return fn;
}

/ **
 * Teste de suporte usando um elemento
 * @param {Função} fn Passa o elemento criado e retorna um resultado booleano
 * /
função assert (fn) {
	var el = document.createElement ("fieldset");

	experimentar {
		retorno !! fn (el);
	} pegar (e) {
		retorna falso;
	} finalmente {
		// Remover de seu pai por padrão
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// libera memória no IE
		el = nulo;
	}
}

/ **
 * Adiciona o mesmo manipulador para todos os attrs especificados
 * @param {String} attrs Lista de atributos separada por pipe
 * @param {Function} manipulador O método que será aplicado
 * /
function addHandle (attrs, manipulador) {
	var arr = attrs.split ("|"),
		i = arr.length;

	enquanto eu-- ) {
		Expr.attrHandle [arr [i]] = manipulador;
	}
}

/ **
 * Verifica a ordem do documento de dois irmãos
 * @param {Element} a
 * @param {Elemento} b
 * @returns {Number} Retorna menos de 0 se a precede b, maior que 0 se a seguir b
 * /
função siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex se disponível em ambos os nós
	if (diff) {
		return diff;
	}

	// Verifique se b segue um
	if (cur) {
		while ((cur = cur.nextSibling)) {
			if (cur === b) {
				return -1;
			}
		}
	}

	retornar um? 1: -1;
}

/ **
 * Retorna uma função para usar em pseudos para tipos de entrada
 tipo @param {String}
 * /
function createInputPseudo (type) {
	função de retorno (elem) {
		nome do var = elem.nodeName.toLowerCase ();
		return name === "input" && elem.type === type;
	};
}

/ **
 * Retorna uma função para usar em pseudos para botões
 tipo @param {String}
 * /
function createButtonPseudo (type) {
	função de retorno (elem) {
		nome do var = elem.nodeName.toLowerCase ();
		return (nome === "entrada" || nome === "botão") && elem.type === tipo;
	};
}

/ **
 * Retorna uma função para usar em pseudos para: enabled /: disabled
 * @param {Boolean} desativado true para: desativado; false para: enabled
 * /
function createDisabledPseudo (disabled) {

	// Conhecido: falsos positivos desativados: fieldset [desativado]> legenda: n-de-tipo (n + 2): can-disable
	função de retorno (elem) {

		// Apenas determinados elementos podem corresponder: ativado ou: desativado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("form" no elem) {

			// Verifique a desativação herdada em elementos não desativados relevantes:
			// * elementos associados ao formulário listados em um fieldset desativado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opção em um optgroup desativado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esses elementos possuem uma propriedade "form".
			if (elem.parentNode && elem.disabled === false) {

				// Os elementos da opção são transferidos para um optgroup pai, se presente
				if ("label" no elem) {
					if ("label" em elem.parentNode) {
						return elem.parentNode.disabled === desativado;
					} outro {
						return elem.disabled === desativado;
					}
				}

				// Suporte: IE 6 - 11
				// Use a propriedade de atalho isDisabled para verificar se há ancestrais do conjunto de campos desativado
				return elem.isDisabled === desativado ||

					// Onde não há isDisabled, verifique manualmente
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						disabledAncestor (elem) === desativado;
			}

			return elem.disabled === desativado;

		// Tente remover elementos que não podem ser desativados antes de confiar na propriedade desativada.
		// Algumas vítimas são apanhadas na nossa rede (rótulo, legenda, menu, faixa), mas não devem
		// existe até mesmo neles, muito menos tenha um valor booleano.
		} else if ("label" no elem) {
			return elem.disabled === desativado;
		}

		// Os elementos restantes não são: ativado nem: desativado
		retorna falso;
	};
}

/ **
 * Retorna uma função para usar em pseudos para posicionais
 * @param {Função} fn
 * /
função createPositionalPseudo (fn) {
	return markFunction (função (argumento) {
		argumento = + argumento;
		return markFunction (função (semente, correspondências) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// Corresponde elementos encontrados nos índices especificados
			enquanto eu-- ) {
				if (seed [(j = matchIndexes [i])]) {
					semente [j] =! (combina [j] = semente [j]);
				}
			}
		});
	});
}

/ **
 * Verifica um nó quanto à validade como um contexto Sizzle
 * @param {Element | Object =} contexto
 * @returns {Element | Object | Boolean} O nó de entrada se aceitável, caso contrário, um valor falso
 * /
function testContext (contexto) {
	return context && typeof context.getElementsByTagName! == "indefinido" && contexto;
}

// Expor vars de suporte por conveniência
support = Sizzle.support = {};

/ **
 * Detecta nós XML
 * @param {Element | Object} elem Um elemento ou um documento
 * @returns {Boolean} True iff elem é um nó XML não HTML
 * /
isXML = Sizzle.isXML = function (elem) {
	// documentElement é verificado para casos em que ainda não existe
	// (como o carregamento de iframes no IE - # 4833)
	var documentElement = elem && (elem.ownerDocument || elem) .documentElement;
	retornar documentElement? documentElement.nodeName! == "HTML": false;
};

/ **
 * Define variáveis ​​relacionadas a documentos uma vez com base no documento atual
 * @param {Element | Object} [doc] Um elemento ou objeto de documento a ser usado para definir o documento
 * @returns {Object} Retorna o documento atual
 * /
setDocument = Sizzle.setDocument = function (node) {
	var hasCompare, subwindow,
		doc = node? node.ownerDocument || nó: preferredDoc;

	// Retorna cedo se o documento for inválido ou já estiver selecionado
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		documento de devolução;
	}

	// Atualizar variáveis ​​globais
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (documento);

	// Suporte: IE 9-11, Edge
	// Acessando documentos iframe após o descarregamento gera erros de "permissão negada" (jQuery # 13936)
	if (preferredDoc! == documento &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Suporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("unload", unloadHandler, false);

		// Suporte: IE 9 - 10 apenas
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	/* Atributos
	-------------------------------------------------- -------------------- * /

	// Suporte: IE <8
	// Verifique se getAttribute realmente retorna atributos e não propriedades
	// (exceto o IE8 booleano)
	support.attributes = assert (função (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) Por *
	-------------------------------------------------- -------------------- * /

	// Verifique se getElementsByTagName ("*") retorna apenas elementos
	support.getElementsByTagName = assert (função (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*"). length;
	});

	// Suporte: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Suporte: IE <10
	// Verifique se getElementById retorna elementos por nome
	// Os métodos getElementById quebrados não selecionam os nomes definidos no programa,
	// use um teste rotatório getElementsByName
	support.getById = assert (função (el) {
		docElem.appendChild (el) .id = expando;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// ID filter e encontrar
	if (support.getById) {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			função de retorno (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = function (id, contexto) {
			if (tipo de contexto.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				retornar elem? [elem]: [];
			}
		};
	} outro {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			função de retorno (elem) {
				var node = tipo de elem.getAttributeNode! == "undefined" &&
					elem.getAttributeNode ("id");
				nó de retorno && node.value === attrId;
			};
		};

		// Suporte: somente IE 6 - 7
		// getElementById não é confiável como um atalho de localização
		Expr.find ["ID"] = function (id, contexto) {
			if (tipo de contexto.getElementById! == "undefined" && documentIsHTML) {
				var nó, eu, elems,
					elem = context.getElementById (id);

				if (elem) {

					// Verifica o atributo id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// Retorna em getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++]))) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				Retorna [];
			}
		};
	}

	// tag
	Expr.find ["TAG"] = support.getElementsByTagName?
		função (tag, contexto) {
			if (tipo de contexto.getElementsByTagName! == "indefinido") {
				return context.getElementsByTagName (tag);

			// Nós do DocumentFragment não possuem gEBTN
			} else if (support.qsa) {
				return context.querySelectorAll (tag);
			}
		}:

		função (tag, contexto) {
			var elem,
				tmp = [],
				i = 0,
				// Por feliz coincidência, um (quebrado) gEBTN aparece nos nós do DocumentFragment também
				results = context.getElementsByTagName (tag);

			// Filtrar possíveis comentários
			if (tag === "*") {
				while ((elem = resultados [i ++]))) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				return tmp;
			}
			retornar resultados;
		};

	// Classe
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, contexto) {
		if (tipo de contexto.getElementsByClassName! == "undefined" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// Suporte para QSA e matchesSelector

	// matchesSelector (: active) reporta false quando verdadeiro (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) relata false quando verdadeiro (Chrome 21)
	// Nós permitimos isso por causa de um bug no IE8 / 9 que gera um erro
	// sempre que `document.activeElement` é acessado em um iframe
	// Então, nós permitimos: foco passar pelo QSA o tempo todo para evitar o erro do IE
	// Veja https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {
		// Construir o regex do QSA
		// Estratégia Regex adotada de Diego Perini
		assert (função (el) {
			// Select está definido para string vazia de propósito
			// Isto é para testar o tratamento do IE de não explicitamente
			// definindo um atributo de conteúdo booleano,
			// já que sua presença deve ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<opção selecionada = ''> </ option> </ select>";

			// Suporte: IE8, Opera 11-12.16
			// Nada deve ser selecionado quando strings vazias seguem ^ = ou $ = ou * =
			// O atributo de teste deve ser desconhecido no Opera, mas "seguro" para o WinRT
			// https://msdn.microsoft.com/pt-br/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '"] "). length) {
				rbuggyQSA.push ("[* ^ $] =" + espaço em branco + "* (?: '' | \" \ ")");
			}

			// Suporte: IE8
			// Atributos booleanos e "valor" não são tratados corretamente
			if (! el.querySelectorAll ("[selecionado]"). length) {
				rbuggyQSA.push ( "\\ [" + espaço em branco + "* (?: valor |" + booleans + ")");
			}

			// Suporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .comprimento) {
				rbuggyQSA.push ("~ =");
			}

			// Webkit / Opera -: marcado deve retornar elementos da opção selecionada
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 gera erro aqui e não verá testes posteriores
			if (! el.querySelectorAll (": checked"). length) {
				rbuggyQSA.push (": checked");
			}

			// Suporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// O seletor in-page `selector # id sibling-combinator` falha
			if (! el.querySelectorAll ("a #" + expando + "+ *") .comprimento) {
				rbuggyQSA.push (". #. + [+ ~]");
			}
		});

		assert (função (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <opção /> </ select>";

			// Suporte: Aplicativos nativos do Windows 8
			// Os atributos type e name são restritos durante a atribuição .innerHTML
			var input = document.createElement ("input");
			input.setAttribute ("tipo", "oculto");
			el.appendChild (entrada) .setAttribute ("nome", "D");

			// Suporte: IE8
			// Impor a diferenciação de maiúsculas e minúsculas do atributo name
			if (el.querySelectorAll ("[nome = d]"). comprimento) {
				rbuggyQSA.push ("name" + whitespace + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: enabled /: disabled e elementos ocultos (elementos ocultos ainda estão habilitados)
			// IE8 gera erro aqui e não verá testes posteriores
			if (el.querySelectorAll (": enabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Suporte: IE9-11 +
			// IE's: o seletor desativado não seleciona os filhos dos conjuntos de campos desativados
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Opera 10-11 não lança em post-comma pseudos inválidos
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((corresponde = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		assert (função (el) {
			// Verifique se é possível fazer correspondênciasSeletor
			// em um nó desconectado (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// Isso deve falhar com uma exceção
			// Gecko não faz erro, retorna false
			matches.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contém
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// Element contém outro
	// Propositadamente auto-exclusivo
	// Como em, um elemento não contém em si
	contém = hasCompare || rnative.test (docElem.contains)?
		função (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			devolve a === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		função (a, b) {
			if (b) {
				while ((b = b.parentNode)) {
					if (b === a) {
						retorno verdadeiro;
					}
				}
			}
			retorna falso;
		};

	/ * Classificando
	-------------------------------------------------- -------------------- * /

	// Ordenação de pedidos de documentos
	sortOrder = hasCompare?
	função (a, b) {

		// Sinalizar para remoção duplicada
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}

		// Classifique a existência do método se apenas uma entrada tiver compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		if (comparar) {
			return compare;
		}

		// Calcular posição se ambas as entradas pertencerem ao mesmo documento
		compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// Caso contrário, sabemos que eles estão desconectados
			1;

		// Nós desconectados
		if (compare & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === compare)) {

			// Escolha o primeiro elemento relacionado ao nosso documento preferido
			if (a === document || a.ownerDocument === preferredDoc && contains (preferredDoc, a)) {
				return -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && contém (preferredDoc, b)) {
				return 1;
			}

			// Manter pedido original
			return sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		return compare & 4? -1: 1;
	}:
	função (a, b) {
		// Sair cedo se os nós forem idênticos
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Nós sem pai são documentos ou desconectados
		if (! aup ||! bup) {
			devolver um documento ==? -1:
				b === documento? 1:
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Se os nós são irmãos, podemos fazer uma verificação rápida
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// Caso contrário, precisamos de listas completas de seus antepassados ​​para comparação
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Desça a árvore procurando uma discrepância
		while (ap [i] === bp [i]) {
			i ++;
		}

		voltar eu?
			// Faça uma verificação de irmãos se os nós tiverem um ancestral comum
			siblingCheck (ap [i], bp [i]):

			// Caso contrário, nós em nosso documento classificam primeiro
			ap [i] === preferredDoc? -1:
			bp [i] === preferredDoc? 1:
			0;
	};

	documento de devolução;
};

Sizzle.matches = function (expr, elements) {
	return Sizzle (expr, null, null, elementos);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Definir o documento vars se necessário
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	// Verifique se os seletores de atributos estão cotados
	expr = expr.replace (rattributeQuotes, "= '$ 1']");

	if (support.matchesSelector && documentIsHTML &&
		! compiladorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr)))) {

		experimentar {
			var ret = matches.call (elem, expr);

			// IE 9's matchesSelector retorna false em nós desconectados
			if (ret || support.disconnectedMatch ||
					// Também, os nós desconectados são considerados em um documento
					// fragmentar no IE 9
					elem.document && elem.document.nodeType! == 11) {
				retorno ret;
			}
		} pegar (e) {}
	}

	retornar Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (contexto, elem) {
	// Definir o documento vars se necessário
	if ((context.ownerDocument || context)! == document) {
		setDocument (contexto);
	}
	return contains (contexto, elem);
};

Sizzle.attr = function (elem, name) {
	// Definir o documento vars se necessário
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// Não se deixe enganar pelas propriedades Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nome,! documentIsHTML):
			Indefinido;

	return val! == indefinido?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nome):
			(val = elem.getAttributeNode (name)) && val.specified?
				val.value:
				nulo;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	throw new Erro ("Erro de sintaxe, expressão não reconhecida:" + msg);
};

/ **
 * Documentar a ordenação e remoção de duplicados
 * @param {ArrayLike} resultados
 * /
Sizzle.uniqueSort = function (results) {
	var elem,
		duplicatas = [],
		j = 0,
		i = 0;

	// A menos que nós * saibamos * podemos detectar duplicatas, assumamos sua presença
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = resultados [i ++]))) {
			if (elem === resultados [i]) {
				j = duplicatas.push (i);
			}
		}
		while (j--) {
			results.splice (duplicatas [j], 1);
		}
	}

	// Limpar entrada após ordenação para liberar objetos
	// Veja https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	retornar resultados;
};

/ **
 * Função de utilitário para recuperar o valor de texto de uma matriz de nós DOM
 * @ param {Matriz | Elemento} elem
 * /
getText = Sizzle.getText = function (elem) {
	nó var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// Se não for nodeType, espera-se que seja um array
		while ((node ​​= elem [i ++]))) {
			// Não atravesse os nós de comentário
			ret + = getText (nó);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Use textContent para elementos
		// uso de innerText removido para consistência de novas linhas (jQuery # 11153)
		if (tipo de elem.textContent === "string") {
			return elem.textContent;
		} outro {
			// Atravessar seus filhos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}
	// Não inclua comentários ou processamento de nós de instrução

	retorno ret;
};

Expr = Sizzle.selectors = {

	// Pode ser ajustado pelo usuário
	cacheLength: 50,

	createPseudo: markFunction,

	correspondência: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": {dir: "parentNode", primeiro: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", primeiro: true},
		"~": {dir: "previousSibling"}
	}

	preFilter: {
		"ATTR": function (match) {
			match [1] = correspondência [1] .replace (runescape, funescape);

			// Mover o valor fornecido para corresponder [3], seja citado ou não
			match [3] = (match [3] || jogo [4] || jogo [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + correspondência [3] + "";
			}

			return match.slice (0, 4);
		}

		"CHILD": function (match) {
			/ * correspondências de matchExpr ["CHILD"]
				1 tipo (somente | nth | ...)
				2 what (child | of-type)
				3 argumento (par | ímpar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 xn-component do argumento xn + y ([+ -]? \ D * n |)
				5 sinal de xn-componente
				6 x de componente xn
				7 sinal do componente y
				8 y de componente y
			* /
			match [1] = corresponde a [1] .toLowerCase ();

			if (match [1] .slice (0, 3) === "nth") {
				// nth- * requer argumento
				if (! match [3]) {
					Sizzle.error (correspondência [0]);
				}

				// parâmetros numéricos x e y para Expr.filter.CHILD
				// lembre-se que falso / verdadeiro vazado, respectivamente, para 0/1
				match [4] = + (jogo [4]? jogo [5] + (jogo [6] || 1): 2 * (jogo [3] === "par" || jogo [3] === " ímpar" ) );
				match [5] = + ((match [7] + match [8]) || jogo [3] === "odd");

			// outros tipos proíbem argumentos
			} else if (match [3]) {
				Sizzle.error (correspondência [0]);
			}

			return match;
		}

		"PSEUDO": function (match) {
			excesso de var
				unquoted =! match [6] && correspondência [2];

			if (matchExpr ["CHILD"]. teste (correspondência [0])) {
				return null;
			}

			// Aceitar argumentos citados como estão
			if (match [3]) {
				correspondência [2] = correspondência [4] || jogo [5] || "";

			// Retira caracteres em excesso de argumentos não citados
			} else if (sem aspas && rpseudo.test (sem aspas) &&
				// Obtém excesso de tokenize (recursivamente)
				(excess = tokenize (sem aspas, verdadeiro)) &&
				// avançar para o próximo parêntese de fechamento
				(excesso = sem aspas.indexOf (")", sem aspas.length - excesso) - unquoted.length)) {

				// o excesso é um índice negativo
				match [0] = corresponde [0] .slice (0, excesso);
				match [2] = sem.slice.slice (0, excesso);
			}

			// Retorna apenas as capturas necessárias pelo método do pseudo-filtro (tipo e argumento)
			return match.slice (0, 3);
		}
	}

	filter: {

		"TAG": function (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				function () {retorno verdadeiro; }:
				função (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		}

		"CLASSE": function (className) {
			var pattern = classCache [className + ""];

			retorno padrão ||
				(padrão = new RegExp ("(^ |" + whitespace + ")" + className + "(" + espaço em branco + "| $)")) &&
				classCache (className, function (elem) {
					return pattern.test (tipo de elem.className === "string" && elem.className || tipoof elem.getAttribute! == "undefined" && elem.getAttribute ("class") || "");
				});
		}

		"ATTR": function (nome, operador, cheque) {
			função de retorno (elem) {
				var result = Sizzle.attr (elem, nome);

				if (resultado == null) {
					operador de retorno === "! =";
				}
				if (! operador) {
					retorno verdadeiro;
				}

				resultado + = "";

				operador de retorno === "="? resultado === verificar:
					operador === "! ="? resultado! == verificar:
					operador === "^ ="? check && result.indexOf (check) === 0:
					operador === "* ="? verifique && result.indexOf (verificar)> -1:
					operador === "$ ="? check && result.slice (-check.length) === verificar:
					operador === "~ ="? ("" + resultado.replace (rwhitespace, "") + "") .indexOf (check)> -1:
					operador === "| ="? resultado === check || result.slice (0, check.length + 1) === check + "-":
					falso;
			};
		}

		"CHILD": function (type, what, argumento, primeiro, último) {
			var simples = type.slice (0, 3)! == "nth",
				forward = type.slice (-4)! == "last",
				ofType = o que === "do tipo";

			retornar primeiro === 1 && last === 0?

				// Atalho para: nth - * (n)
				função (elem) {
					return !! elem.parentNode;
				}:

				função (elem, contexto, xml) {
					var cache, uniqueCache, outerCache, nó, nodeIndex, start,
						dir = simples! == encaminhar "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = false;

					if (pai) {

						//: (primeiro | último | apenas) - (filho | do tipo)
						if (simple) {
							while (dir) {
								nó = elem;
								while ((nó = nó [dir])) {
									if (ofType?
										node.nodeName.toLowerCase () === name:
										node.nodeType === 1) {

										retorna falso;
									}
								}
								// Inverte a direção para: only- * (se ainda não o tivermos feito)
								start = dir = type === "only" &&! start && "nextSibling";
							}
							retorno verdadeiro;
						}

						start = [avançar parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) armazena dados de cache em `parent`
						if (forward && useCache) {

							// Buscar `elem` de um índice previamente armazenado em cache

							// ... de uma maneira amigável com o gzip
							nó = pai;
							outerCache = node [expando] || (nó [expando] = {});

							// Suporte: IE <9 apenas
							// Defende-se contra attroperties clonadas (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// Retorna à procura de `elem` desde o início
								(diff = nodeIndex = 0) || start.pop ())) {

								// Quando encontrado, indexa cache no `parent` e quebra
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [type] = [dirruns, nodeIndex, diff];
									pausa;
								}
							}

						} outro {
							// Use o índice do elemento armazenado em cache anteriormente, se disponível
							if (useCache) {
								// ... de uma maneira amigável com o gzip
								nó = elem;
								outerCache = node [expando] || (nó [expando] = {});

								// Suporte: IE <9 apenas
								// Defende-se contra attroperties clonadas (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// ou: nth-last-child (...) ou: nth (-last)? - of-type (...)
							if (diff === false) {
								// Use o mesmo loop acima para procurar o `elem` desde o início
								while ((node ​​= ++ nodeIndex && node && node [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									if ((deTipo?
										node.nodeName.toLowerCase () === name:
										node.nodeType === 1) &&
										++ diff) {

										// Cache do índice de cada elemento encontrado
										if (useCache) {
											outerCache = node [expando] || (nó [expando] = {});

											// Suporte: IE <9 apenas
											// Defende-se contra attroperties clonadas (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [type] = [dirruns, diff];
										}

										if (nó === elem) {
											pausa;
										}
									}
								}
							}
						}

						// Incorpore o offset e verifique o tamanho do ciclo
						diff - = last;
						return diff === primeiro || (diff% primeiro === 0 && diff / first> = 0);
					}
				};
		}

		"PSEUDO": function (pseudo, argument) {
			// nomes de pseudo-classe são insensíveis a maiúsculas e minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar por maiúsculas e minúsculas no caso de pseudos personalizados serem adicionados com letras maiúsculas
			// Lembre-se que setFilters herda de pseudos
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo não suportado:" + pseudo);

			// O usuário pode usar o createPseudo para indicar que
			// argumentos são necessários para criar a função de filtro
			// assim como o Sizzle
			if (fn [expando]) {
				return fn (argumento);
			}

			// Mas mantenha suporte para assinaturas antigas
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argumento];
				Retornar Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (função (semente, correspondências) {
						var idx,
							correspondido = fn (semente, argumento),
							i = corresponded.length;
						enquanto eu-- ) {
							idx = indexOf (semente, casada [i]);
							semente [idx] =! (corresponde [idx] = correspondido [i]);
						}
					}):
					função (elem) {
						return fn (elem, 0, args);
					};
			}

			return fn;
		}
	}

	pseudos: {
		// pseudos potencialmente complexos
		"not": markFunction (função (seletor) {
			// Aparar o seletor passado para compilar
			// para evitar o tratamento de líderes e finais
			// espaços como combinadores
			var input = [],
				results = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			return matcher [expando]?
				markFunction (função (semente, correspondências, contexto, xml) {
					var elem,
						unmatched = matcher (seed, null, xml, []),
						i = seed.length;

					// Corresponde elementos não correspondidos por `matcher`
					enquanto eu-- ) {
						if ((elem = sem correspondência [i])) {
							semente [i] =! (combina [i] = elem);
						}
					}
				}):
				função (elem, contexto, xml) {
					entrada [0] = elem;
					matcher (entrada, nulo, xml, resultados);
					// Não mantenha o elemento (questão 299)
					entrada [0] = nulo;
					return! results.pop ();
				};
		}),

		"has": markFunction (função (seletor) {
			função de retorno (elem) {
				return Sizzle (seletor, elem) .length> 0;
			};
		}),

		"contém": markFunction (function (text) {
			text = text.replace (runescape, funescape);
			função de retorno (elem) {
				return (elem.textContent || elem.innerText || getText (elem)) .indexOf (texto)> -1;
			};
		}),

		// "Se um elemento é representado por um seletor: lang ()
		// baseia-se unicamente no valor de linguagem do elemento
		// sendo igual ao identificador C,
		// ou começando com o identificador C imediatamente seguido por "-".
		// A correspondência de C com o valor do idioma do elemento é realizada sem distinção entre maiúsculas e minúsculas.
		// O identificador C não precisa ser um nome de idioma válido. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (função (idioma) {
			// lang value deve ser um identificador válido
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("lang não suportado:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			função de retorno (elem) {
				var elemLang;
				Faz {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang")))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				retorna falso;
			};
		}),

		// Diversos
		"target": function (elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice (1) === elem.id;
		}

		"root": function (elem) {
			return elem === docElem;
		}

		"focus": function (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		}

		// Boolean properties
		"enabled": createDisabledPseudo (false),
		"desativado": createDisabledPseudo (true),

		"checked": function (elem) {
			// Em CSS3,: checked deve retornar os elementos marcados e selecionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		}

		"selected": function (elem) {
			// Acessar esta propriedade torna selecionado por padrão
			// opções no Safari funcionam corretamente
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		}

		// Conteúdos
		"empty": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: vazio é negado por nós de elemento (1) ou de conteúdo (texto: 3; cdata: 4; entidade ref: 5),
			// mas não por outros (comentário: 8; instrução de processamento: 7; etc.)
			// nodeType <6 funciona porque os atributos (2) não aparecem como filhos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					retorna falso;
				}
			}
			retorno verdadeiro;
		}

		"pai": function (elem) {
			return! Expr.pseudos ["empty"] (elem);
		}

		// Elemento / tipos de entrada
		"cabeçalho": function (elem) {
			return rheader.test (elem.nodeName);
		}

		"input": function (elem) {
			return rinputs.test (elem.nodeName);
		}

		"button": function (elem) {
			nome do var = elem.nodeName.toLowerCase ();
			return name === "input" && elem.type === "button" || nome === "botão";
		}

		"text": function (elem) {
			var attr;
			return elem.nodeName.toLowerCase () === "input" &&
				elem.type === "text" &&

				// Suporte: IE <8
				// Novos valores de atributos HTML5 (por exemplo, "pesquisa") aparecem com elem.type === "text"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "texto");
		}

		// Posição na coleção
		"first": createPositionalPseudo (function () {
			retorno [0];
		}),

		"last": createPositionalPseudo (function (matchIndexes, length) {
			return [comprimento - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, comprimento, argumento) {
			return [argumento <0? argumento + comprimento: argumento];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			para (; i <comprimento; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"ímpar": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			para (; i <comprimento; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0? argumento + comprimento: argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, comprimento, argumento) {
			var i = argumento <0? argumento + comprimento: argumento;
			para (; ++ i <comprimento;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Adicionar botão / tipo de entrada pseudos
para (i em {radio: true, caixa de seleção: true, file: true, senha: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
para (i em {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API fácil para criar novos setFilters
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (seletor, parseOnly) {
	var correspondido, correspondência, tokens, tipo,
		soFar, grupos, preFilters,
		cached = tokenCache [seletor + ""];

	if (em cache) {
		return parseOnly? 0: cached.slice (0);
	}

	soFar = seletor;
	groups = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// Vírgula e primeira execução
		if (! correspondido || (match = rcomma.exec (soFar)))) {
			if (match) {
				// Não consuma as vírgulas à direita como válidas
				soFar = soFar.slice (match [0] .length) || tão longe;
			}
			groups.push ((tokens = []));
		}

		correspondido = falso;

		// Combinators
		if ((match = rcombinators.exec (soFar))) {
			correspondido = match.shift ();
			tokens.push ({
				valor: correspondido
				// Conjuga os combinadores descendentes para o espaço
				type: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// Filters
		for (digite em Expr.filter) {
			if ((match = matchExpr [tipo] .exec (soFar)) && (! preFilters [tipo] ||
				(match = preFilters [tipo] (jogo)))) {
				correspondido = match.shift ();
				tokens.push ({
					valor: correspondido
					tipo: tipo
					fósforos: fósforo
				});
				soFar = soFar.slice (matched.length);
			}
		}

		if (! correspondido) {
			pausa;
		}
	}

	// Retorna a duração do excesso inválido
	// se estamos apenas analisando
	// Caso contrário, jogue um erro ou retorne tokens
	return parseOnly?
		soFar.length:
		tão longe ?
			Sizzle.error (seletor):
			// Cache os tokens
			tokenCache (seletor, grupos) .slice (0);
};

function toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		selector = "";
	para (; i <len; i ++) {
		seletor + = tokens [i] .valor;
	}
	seletor de retorno;
}

function addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		chave = pular || dir,
		checkNonElements = base && key === "parentNode",
		doneName = feito ++;

	return combinator.first?
		// Verifique contra o ancestral mais próximo / elemento anterior
		função (elem, contexto, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, contexto, xml);
				}
			}
			retorna falso;
		}:

		// Verifica todos os elementos anteriores / anteriores
		função (elem, contexto, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// Não podemos definir dados arbitrários em nós XML, para que eles não se beneficiem do armazenamento em cache de combinadores
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							retorno verdadeiro;
						}
					}
				}
			} outro {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// Suporte: IE <9 apenas
						// Defende-se contra attroperties clonadas (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (ignorar && ignorar === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [chave]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Atribuir ao newCache para que os resultados sejam propagados para os elementos anteriores
							return (newCache [2] = oldCache [2]);
						} outro {
							// Reutilize o newcache para que os resultados sejam propagados para os elementos anteriores
							uniqueCache [key] = newCache;

							// Uma partida significa que terminamos; uma falha significa que temos que continuar verificando
							if ((newCache [2] = matcher (elem, contexto, xml))) {
								retorno verdadeiro;
							}
						}
					}
				}
			}
			retorna falso;
		};
}

função elementMatcher (matchers) {
	return matchers.length> 1?
		função (elem, contexto, xml) {
			var i = matchers.length;
			enquanto eu-- ) {
				if (! matchers [i] (elem, contexto, xml)) {
					retorna falso;
				}
			}
			retorno verdadeiro;
		}:
		Correspondentes [0];
}

function multipleContexts (seletor, contextos, resultados) {
	var i = 0,
		len = contextts.length;
	para (; i <len; i ++) {
		Sizzle (seletor, contextos [i], resultados);
	}
	retornar resultados;
}

função condensar (incomparável, mapa, filtro, contexto, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = tamanho incomparável
		mapped = map! = null;

	para (; i <len; i ++) {
		if ((elem = sem correspondência [i])) {
			if (! filter || filter (elem, contexto, xml)) {
				newUnmatched.push (elem);
				if (mapeado) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

função setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (função (semente, resultados, contexto, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexistente = results.length,

			// Obtém elementos iniciais da semente ou contexto
			elems = semente || multipleContexts (seletor || "*", context.nodeType? [contexto]: contexto, []),

			// Prefilter para obter a entrada do matcher, preservando um mapa para sincronização de resultados de semente
			matcherIn = preFilter && (seed ||! seletor)?
				condensar (elems, preMap, preFilter, contexto, xml):
				elems

			matcherOut = matcher?
				// Se tivermos um postFinder ou uma semente filtrada ou um postFilter sem propagação de sementes ou resultados preexistentes,
				postFinder || (semente? preFilter: preexistente || postFilter)?

					// ... o processamento intermediário é necessário
					[]:

					// ... caso contrário, use os resultados diretamente
					resultados :
				matcherIn;

		// Encontrar correspondências primárias
		if (matcher) {
			matcher (matcherIn, matcherOut, contexto, xml);
		}

		// Apply postFilter
		if (postFilter) {
			temp = condense (matcherOut, postMap);
			postFilter (temp, [], contexto, xml);

			// Desfazer a correspondência de elementos com falha, movendo-os de volta ao matcherIn
			i = temp.length;
			enquanto eu-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		if (seed) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Obtenha o matcherOut final condensando este intermediário em contextos do postFinder
					temp = [];
					i = matcherOut.length;
					enquanto eu-- ) {
						if ((elem = matcherOut [i])) {
							// Restaurar matcherIn desde que elem ainda não é uma partida final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Mover elementos combinados da semente para os resultados para mantê-los sincronizados
				i = matcherOut.length;
				enquanto eu-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (semente, elem): preMap [i])> -1) {

						semente [temp] =! (resultados [temp] = elem);
					}
				}
			}

		// Adicionar elementos aos resultados, por meio do postFinder, se definido
		} outro {
			matcherOut = condensar (
				matcherOut === resultados?
					matcherOut.splice (preexisting, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (null, resultados, matcherOut, xml);
			} outro {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

função matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative [tokens [0] .type],
		implicitRelative = leadingRelative || Expr.relative [""],
		i = leadingRelative? 1: 0,

		// O comparador básico garante que os elementos sejam alcançáveis ​​a partir de contexto (s) de nível superior
		matchContext = addCombinator (function (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [function (elem, context, xml) {
			var ret = (! leadingRelative && (xml || contexto! == outermostContext)) || (
				(checkContext = contexto) .nodeType?
					matchContext (elem, contexto, xml):
					matchAnyContext (elem, contexto, xml));
			// Evite pendurar no elemento (questão 299)
			checkContext = null;
			retorno ret;
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} outro {
			matcher = Expr.filter [tokens [i] .type] .apply (nulo, tokens [i] .matches);

			// Retorno especial ao ver um matcher posicional
			if (matcher [expando]) {
				// Encontre o próximo operador relativo (se houver) para manuseio correto
				j = ++ i;
				para (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						pausa;
					}
				}
				return setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (
						// Se o token precedente for um combinador descendente, insira um qualquer elemento implícito `*`
						tokens.slice (0, i - 1) .concat ({valor: tokens [i - 2]. tipo === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					matcher
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (matcher);
		}
	}

	return elementMatcher (correspondentes);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (semente, contexto, xml, resultados, outermost) {
			var elem, j, matcher,
				correspondedCount = 0,
				eu = "0",
				incomparável = semente && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Devemos sempre ter elementos de sementes ou contextos mais externos
				elems = semente || byElement && Expr.find ["TAG"] ("*", ultraperiférico),
				// Use dirruns inteiros iff este é o correspondente mais externo
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (mais externo) {
				outermostContext = context === document || contexto || mais externo;
			}

			// Adicionar elementos passando elementMatchers diretamente aos resultados
			// Suporte: IE <9, Safari
			// Tolerate propriedades de NodeList (IE: "comprimento"; Safari: <number>) elementos correspondentes por id
			for (; i! == len && (elem = elems [i])! = nulo; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++]))) {
						if (matcher (elem, contexto || documento, xml)) {
							results.push (elem);
							pausa;
						}
					}
					if (mais externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Acompanhe elementos incomparáveis ​​para filtros definidos
				if (bySet) {
					// Eles terão passado por todos os possíveis matchers
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Alongar a matriz para cada elemento, correspondido ou não
					if (seed) {
						unmatched.push (elem);
					}
				}
			}

			// `i` é agora a contagem dos elementos visitados acima e adicioná-lo ao` matchedCount`
			// torna o último não negativo.
			correspondedCount + = i;

			// Aplicar filtros de conjuntos a elementos não correspondentes
			// NOTA: Isso pode ser pulado se não houver elementos não correspondentes (isto é, `matchedCount`
			// é igual a `i`), a menos que não tenhamos visitado _qualquer_ elementos no ciclo acima porque temos
			// sem correspondência de elementos e sem semente.
			// Incrementando uma string inicial "0" `i` permite que` i` permaneça uma string somente naquele
			// case, que resultará em um "00" `matchedCount` que difere de` i` mas também é
			// numericamente zero.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++]))) {
					matcher (unmatched, setMatched, context, xml);
				}

				if (seed) {
					// Reintegre as correspondências de elementos para eliminar a necessidade de classificação
					if (correspondido> 0) {
						enquanto eu-- ) {
							if (! (unmatched [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descarta valores de marcadores de índice para obter apenas correspondências reais
					setMatched = condense (setMatched);
				}

				// Adicionar correspondências aos resultados
				push.apply (resultados, setMatched);

				// O conjunto sem sementes coincide com vários sucessivos participantes que estipulam a classificação
				if (outermost &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Substituir a manipulação de globals por correspondentes aninhados
			if (mais externo) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			retornar sem correspondência;
		};

	return bySet?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (seletor, match / * somente uso interno * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [seletor + ""];

	if (! cacheado) {
		// Gera uma função de funções recursivas que podem ser usadas para verificar cada elemento
		if (! match) {
			match = tokenize (seletor);
		}
		i = match.length;
		enquanto eu-- ) {
			cached = matcherFromTokens (correspondência [i]);
			if (em cache [expando]) {
				setMatchers.push (em cache);
			} outro {
				elementMatchers.push (em cache);
			}
		}

		// Cache da função compilada
		cached = compilerCache (seletor, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Salvar seletor e tokenização
		cached.selector = seletor;
	}
	retornar em cache;
};

/ **
 * Uma função de seleção de baixo nível que funciona com o compilado do Sizzle
 * funções de seletor
 * @param {String | Function} selector Um seletor ou um pré-compilado
 * função selector construída com o Sizzle.compile
 Contexto @param {Element}
 * @param {Array} [resultados]
 * @param {Array} [seed] Um conjunto de elementos para combinar
 * /
select = Sizzle.select = function (seletor, contexto, resultados, seed) {
	var i, tokens, token, tipo, encontrar,
		compiled = typeof selector === "function" && selector,
		match =! seed && tokenize ((selector = seletor de compilado || seletor));

	resultados = resultados || [];

	// Tente minimizar as operações se houver apenas um seletor na lista e nenhuma semente
	// (o último dos quais nos garante contexto)
	if (match.length === 1) {

		// Reduzir contexto se o seletor composto principal for um ID
		tokens = match [0] = corresponde a [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]). tipo === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), contexto) || []) [0];
			if (! contexto) {
				retornar resultados;

			// Correspondentes pré-compilados ainda verificarão a ascendência, portanto, suba um nível
			} else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Buscar um seed set para a correspondência da direita para a esquerda
		i = matchExpr ["needsContext"]. teste (seletor)? 0: tokens.length;
		enquanto eu-- ) {
			token = tokens [i];

			// Abortar se acertarmos um combinador
			if (Expr.relative [(type = token.type)]) {
				pausa;
			}
			if ((find = Expr.find [type])) {
				// Pesquisa, contexto de expansão para os principais combinadores de irmãos
				if ((seed = encontrar (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) || contexto
				))) {

					// Se a semente estiver vazia ou nenhum token permanecer, podemos voltar mais cedo
					tokens.splice (i, 1);
					selector = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (resultados, semente);
						retornar resultados;
					}

					pausa;
				}
			}
		}
	}

	// Compile e execute uma função de filtragem se não for fornecido
	// Fornece `match` para evitar a retokenização se modificarmos o seletor acima
	(compilado || compile (selector, match)) (
		semente,
		contexto,
		! documentIsHTML,
		resultados,
		contexto || rsibling.test (selector) && testContext (context.parentNode) || contexto
	);
	retornar resultados;
};

// atribuições únicas

// Ordenar estabilidade
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Suporte: Chrome 14 a 35 ou mais
// Sempre assume duplicatas se elas não forem passadas para a função de comparação
support.detectDuplicates = !! hasDuplicate;

// Initialize no documento padrão
setDocument ();

// Suporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (fixo no Chrome 27)
// Os nós destacados seguem-se confusamente * uns aos outros *
support.sortDetached = assert (função (el) {
	// Deve retornar 1, mas retorna 4 (seguinte)
	return el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Suporte: IE <8
// Prevenir atributo / propriedade "interpolação"
// https://msdn.microsoft.com/pt-br/library/ms536429%28VS.85%29.aspx
if (! assert (função (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("tipo | href | altura | largura", função (elem, nome, isXML) {
		if (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Suporte: IE <9
// Use defaultValue no lugar de getAttribute ("value")
if (! support.attributes ||! assert (função (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("value", "");
	return el.firstChild.getAttribute ("value") === "";
})) {
	addHandle ("valor", função (elem, nome, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "entrada") {
			return elem.defaultValue;
		}
	});
}

// Suporte: IE <9
// Use getAttributeNode para buscar booleanos quando getAttribute reside
if (! assert (função (el) {
	return el.getAttribute ("disabled") == null;
})) {
	addHandle (booleanos, função (elem, nome, isXML) {
		var val;
		if (! isXML) {
			return elem [name] === true? name.toLowerCase ():
					(val = elem.getAttributeNode (name)) && val.specified?
					val.value:
				nulo;
		}
	});
}

voltar Sizzle;

}) (janela);



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Descontinuada
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (elem, dir, until) {
	var correspondido = [],
		truncate = até! == indefinido;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncado && jQuery (elem) .é (até)) {
				pausa;
			}
			matched.push (elem);
		}
	}
	retorno correspondido;
};


var siblings = function (n, elem) {
	var correspondido = [];

	para (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			correspondência.push (n);
		}
	}

	retorno correspondido;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, name) {

  return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implemente a funcionalidade idêntica para filtro e não
função winnow (elementos, qualificador, não) {
	if (isFunction (qualificador)) {
		return jQuery.grep (elementos, função (elem, i) {
			return !! qualifier.call (elem, i, elem)! == não;
		});
	}

	// Single elemento
	if (qualifier.nodeType) {
		return jQuery.grep (elementos, função (elem) {
			return (elem === qualificador)! == não;
		});
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if (tipo de qualificador! == "string") {
		return jQuery.grep (elementos, função (elem) {
			return (indexOf.call (qualificador, elem)> -1)! == não;
		});
	}

	// Filtrado diretamente para seletores simples e complexos
	return jQuery.filter (qualificador, elementos, não);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	se não ) {
		expr = ": not (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	return jQuery.find.matches (expr, jQuery.grep (elems, função (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	find: function (seletor) {
		var i, ret,
			len = this.length,
			self = this;

		if (tipo de seletor! == "string") {
			return this.pushStack (jQuery (seletor) .filter (função () {
				para (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], isto)) {
						retorno verdadeiro;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		para (i = 0; i <len; i ++) {
			jQuery.find (seletor, self [i], ret);
		}

		retornar len> 1? jQuery.uniqueSort (ret): ret;
	}
	filter: function (selector) {
		return this.pushStack (winnow (isto, seletor || [], falso));
	}
	não: function (selector) {
		return this.pushStack (winnow (isso, seletor || [], true));
	}
	é: função (seletor) {
		retorno !! winnow (
			esta,

			// Se este for um seletor posicional / relativo, verifique a associação no conjunto retornado
			// so $ ("p: first"). is ("p: last") não retornará true para um doc com dois "p".
			typeof selector === "string" && rneedsContext.test (seletor)?
				jQuery (seletor):
				seletor || []
			falso
		).comprimento;
	}
});


// Inicializa um objeto jQuery


// Uma referência central à raiz jQuery (document)
var rootjQuery,

	// Uma maneira simples de verificar strings HTML
	// Priorize #id sobre <tag> para evitar XSS via location.hash (# 9521)
	// Reconhecimento estrito de HTML (# 11290: deve começar com <)
	// Atalho simples caso #id para velocidade
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = function (seletor, contexto, raiz) {
		var match, elem;

		// HANDLE: $ (""), $ (null), $ (undefined), $ (false)
		if (! selector) {
			devolva isto;
		}

		// O método init () aceita um rootjQuery alternativo
		// então migrar pode suportar jQuery.sub (gh-2101)
		raiz = raiz || rootjQuery;

		// Lidar com strings HTML
		if (tipo de seletor === "string") {
			if (seletor [0] === "<" &&
				selector [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Assuma que as strings que começam e terminam com <> são HTML e pulam a verificação de regex
				match = [nulo, seletor, nulo];

			} outro {
				match = rquickExpr.exec (seletor);
			}

			// Corresponda o html ou certifique-se de que nenhum contexto esteja especificado para #id
			if (match && (match [1] ||! contexto)) {

				// HANDLE: $ (html) -> $ (array)
				if (match [1]) {
					context = context instanceof jQuery? contexto [0]: contexto;

					// A opção para executar scripts é verdadeira para o back-compat
					// Intencionalmente deixe o erro ser lançado se parseHTML não estiver presente
					jQuery.merge (isso, jQuery.parseHTML (
						jogo [1],
						context && context.nodeType? context.ownerDocument || contexto: documento,
						verdade
					));

					// HANDLE: $ (html, adereços)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (contexto)) {
						para (corresponder no contexto) {

							// As propriedades do contexto são chamadas como métodos, se possível
							if (isFunction (este [jogo])) {
								este [jogo] (contexto [jogo]);

							// ... e definido de outra forma como atributos
							} outro {
								this.attr (correspondência, contexto [correspondência]);
							}
						}
					}

					devolva isto;

				// HANDLE: $ (# id)
				} outro {
					elem = document.getElementById (correspondência [2]);

					if (elem) {

						// Injetar o elemento diretamente no objeto jQuery
						isso [0] = elem;
						this.length = 1;
					}
					devolva isto;
				}

			// HANDLE: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (contexto || root) .find (seletor);

			// HANDLE: $ (expr, contexto)
			// (que é equivalente a: $ (context) .find (expr)
			} outro {
				return this.constructor (contexto) .find (seletor);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			este [0] = seletor;
			this.length = 1;
			devolva isto;

		// HANDLE: $ (função)
		// Atalho para o documento pronto
		} else if (isFunction (seletor)) {
			retornar root.ready! == indefinido?
				root.ready (seletor):

				// Executar imediatamente se pronto não estiver presente
				seletor (jQuery);
		}

		return jQuery.makeArray (seletor, isso);
	};

// Fornece à função init o protótipo do jQuery para instanciação posterior
init.prototype = jQuery.fn;

// Inicializa a referência central
rootjQuery = jQuery (documento);


var rparentsprev = / ^ (?: pais | prev (?: Até | Todos)) /,

	// Métodos garantidos para produzir um conjunto exclusivo ao começar de um conjunto exclusivo
	guaranteedUnique = {
		crianças: verdade
		conteúdo: true
		próximo: verdadeiro
		prev: true
	};

jQuery.fn.extend ({
	tem: function (target) {
		var targets = jQuery (target, this),
			l = targets.length;

		return this.filter (function () {
			var i = 0;
			para (; i <l; i ++) {
				if (jQuery.contains (isso, alvos [i])) {
					retorno verdadeiro;
				}
			}
		});
	}

	Mais próximo: função (seletores, contexto) {
		var cur,
			i = 0,
			l = this.length,
			correspondido = [],
			targets = typeof selectors! == "string" && jQuery (seletores);

		// Os seletores posicionais nunca correspondem, pois não há contexto de seleção_
		if (! rneedsContext.test (selectors)) {
			para (; i <l; i ++) {
				para (cur = this [i]; cur && cur! == contexto; cur = cur.parentNode) {

					// Sempre pule fragmentos de documentos
					if (cur.nodeType <11 && (destinos?
						targets.index (cur)> -1:

						// Não passe não-elementos para Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, seletores))) {

						correspondência.push (cur);
						pausa;
					}
				}
			}
		}

		return this.pushStack (matched.length> 1? jQuery.uniqueSort (correspondido): correspondido);
	}

	// Determinar a posição de um elemento dentro do conjunto
	index: function (elem) {

		// Nenhum argumento, índice de retorno no pai
		if (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Index no seletor
		if (typeof elem === "string") {
			return indexOf.call (jQuery (elem), este [0]);
		}

		// Localize a posição do elemento desejado
		retornar indexOf.call (isso,

			// Se receber um objeto jQuery, o primeiro elemento é usado
			elem.jquery? elem [0]: elem
		);
	}

	add: function (seletor, contexto) {
		return this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (seletor, contexto))
			)
		);
	}

	addBack: function (selector) {
		return this.add (seletor == null?
			this.prevObject: this.prevObject.filter (seletor)
		);
	}
});

função irmão (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	retorno cur;
}

jQuery.each ({
	parent: function (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? pai: nulo;
	}
	parents: function (elem) {
		return dir (elem, "parentNode");
	}
	parentsUntil: function (elem, i, until) {
		return dir (elem, "parentNode", até);
	}
	próximo: função (elem) {
		return irmão (elem, "nextSibling");
	}
	prev: function (elem) {
		return irmão (elem, "previousSibling");
	}
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	}
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	}
	nextUntil: function (elem, i, until) {
		return dir (elem, "nextSibling", até);
	}
	prevUntil: function (elem, i, until) {
		return dir (elem, "previousSibling", até);
	}
	irmãos: function (elem) {
		return siblings ((elem.parentNode || {}) .firstChild, elem);
	}
	children: function (elem) {
		retornar irmãos (elem.firstChild);
	}
	conteúdo: function (elem) {
        if (nodeName (elem, "iframe")) {
            return elem.contentDocument;
        }

        // Suporte: apenas do IE 9 - 11, apenas iOS 7, navegador Android <= 4,3 apenas
        // Tratar o elemento do template como um regular nos navegadores que
        // não suporta.
        if (nodeName (elem, "template")) {
            elem = elem.content || elem;
        }

        return jQuery.merge ([], elem.childNodes);
	}
}, function (name, fn) {
	jQuery.fn [name] = function (até, seletor) {
		var correspondido = jQuery.map (isso, fn, até);

		if (name.slice (-5)! == "Até") {
			seletor = até;
		}

		if (selector && typeof selector === "string") {
			correspondido = jQuery.filter (selector, correspondido);
		}

		if (this.length> 1) {

			// Remover duplicatas
			if (! guaranteedUnique [nome]) {
				jQuery.uniqueSort (correspondido);
			}

			// Ordem inversa para pais * e derivados anteriores
			if (rparentsprev.test (nome)) {
				correspondido.reverse ();
			}
		}

		return this.pushStack (correspondido);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Converter opções formatadas em string em formatadas em objetos
function createOptions (opções) {
	objeto var = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		objeto [flag] = true;
	});
	objeto de retorno;
}

/ *
 * Crie uma lista de retorno usando os seguintes parâmetros:
 *
 * opções: uma lista opcional de opções separadas por espaço que vai mudar a forma como
 * a lista de retorno de chamada se comporta ou um objeto de opção mais tradicional
 *
 * Por padrão, uma lista de retorno de chamada agirá como uma lista de retorno de chamada de evento e poderá ser
 * "disparou" várias vezes.
 *
 * Possíveis opções:
 *
 * uma vez: garantirá que a lista de retorno só possa ser acionada uma vez (como um Diferido)
 *
 * memória: irá acompanhar os valores anteriores e chamará qualquer retorno de chamada
 * após a lista ter sido demitida imediatamente com o último "memorizado"
 * valores (como um diferido)
 *
 * exclusivo: garantirá que um retorno de chamada só possa ser adicionado uma vez (nenhuma duplicata na lista)
 *
 * stopOnFalse: interrompe os chamados quando um callback retorna false
 *
 * /
jQuery.Callbacks = function (options) {

	// Converter opções do formato String para Formatado por objeto, se necessário
	// (nós checamos o cache primeiro)
	options = typeof options === "string"?
		createOptions (opções):
		jQuery.extend ({}, opções);

	var // Sinalizar para saber se a lista está sendo disparada no momento
		queima,

		// Último valor de fogo para listas não esquecíveis
		memória,

		// Sinalizar para saber se a lista já foi disparada
		disparamos,

		// Sinalizar para evitar disparar
		bloqueado

		// Lista de retorno real
		list = [],

		// Fila de dados de execução para listas repetíveis
		fila = []

		// Índice de retorno de chamada atualmente ativo (modificado por adicionar / remover conforme necessário)
		firingIndex = -1,

		// Fire callbacks
		fire = function () {

			// Aplicar o disparo único
			bloqueado = bloqueado || options.once;

			// Execute callbacks para todas as execuções pendentes,
			// respeitando as sobreposições de firingIndex e as mudanças de tempo de execução
			fired = firing = true;
			para (; queue.length; firingIndex = -1) {
				memória = queue.shift ();
				while (++ firingIndex <list.length) {

					// Executa o retorno de chamada e verifica se há rescisão antecipada
					if (listar [firingIndex] .apply (memória [0], memória [1]) === false &&
						options.stopOnFalse) {

						// Pula para o fim e esquece os dados, então .add não reaparece
						firingIndex = list.length;
						memória = falsa;
					}
				}
			}

			// Esqueça os dados se terminarmos com isso
			if (! options.memory) {
				memória = falsa;
			}

			disparo = falso;

			// Limpar se terminarmos de vez
			if (locked) {

				// Mantenha uma lista vazia se tivermos dados para futuras chamadas adicionais
				se (memória) {
					list = [];

				// Caso contrário, esse objeto é gasto
				} outro {
					list = "";
				}
			}
		}

		// Objeto de retorno de chamada real
		self = {

			// Adicionar um retorno de chamada ou uma coleção de retornos de chamada à lista
			add: function () {
				if (list) {

					// Se tivermos memória de uma corrida passada, devemos disparar depois de adicionar
					if (memory &&! firing) {
						firingIndex = list.length - 1;
						queue.push (memória);
					}

					(função add (args) {
						jQuery.each (args, function (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "string") {

								// Inspecionar recursivamente
								adicionar (arg);
							}
						});
					}) (argumentos);

					if (memory &&! firing) {
						fogo();
					}
				}
				devolva isto;
			}

			// Remover um retorno de chamada da lista
			remove: function () {
				jQuery.each (argumentos, função (_, arg) {
					var index;
					while ((index = jQuery.inArray (arg, lista, índice))> -1) {
						list.splice (índice, 1);

						// Lidar com índices de disparo
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				devolva isto;
			}

			// Verifique se um determinado retorno de chamada está na lista.
			// Se nenhum argumento for fornecido, retorne se a lista possui ou não retornos de chamada anexados.
			tem: function (fn) {
				devolver fn?
					jQuery.inArray (fn, list)> -1:
					list.length> 0;
			}

			// Remover todos os retornos de chamada da lista
			empty: function () {
				if (list) {
					list = [];
				}
				devolva isto;
			}

			// Desativar .fire e .add
			// Anular quaisquer execuções atuais / pendentes
			// Limpar todos os retornos de chamada e valores
			disable: function () {
				locked = queue = [];
				list = memory = "";
				devolva isto;
			}
			disabled: function () {
				retornar lista;
			}

			// Desativar .fire
			// Também desativa o .add a menos que tenhamos memória (já que não teria efeito)
			// Anular quaisquer execuções pendentes
			lock: function () {
				locked = queue = [];
				if (! memory &&! firing) {
					list = memory = "";
				}
				devolva isto;
			}
			bloqueado: function () {
				retorno !! trancado;
			}

			// Chama todos os retornos de chamada com o contexto e argumentos fornecidos
			fireWith: function (context, args) {
				if (! locked) {
					args = args || [];
					args = [contexto, args.slice? args.slice (): args];
					queue.push (args);
					if (! firing) {
						fogo();
					}
				}
				devolva isto;
			}

			// Chame todos os retornos de chamada com os argumentos fornecidos
			fire: function () {
				self.fireCom (isto, argumentos);
				devolva isto;
			}

			// Para saber se os callbacks já foram chamados pelo menos uma vez
			disparado: function () {
				retorno !! despedido;
			}
		};

	retorno auto;
};


Identidade da função (v) {
	return v;
}
função Thrower (ex) {
	jogue ex;
}

function adoptValue (valor, resolver, rejeitar, noValor) {
	método var;

	experimentar {

		// Verifique primeiro o aspecto da promessa para privilegiar o comportamento síncrono
		if (valor && éFunção ((método = valor.promise))) {
			method.call (valor) .done (resolve) .fail (rejeitar);

		// Outros thenables
		} else if (valor && éFunção ((método = valor.depois))) {
			method.call (valor, resolução, rejeição);

		// Outros não -ables
		} outro {

			// Controlar os argumentos `resolve` deixando a matriz Array # converter o` noValue` booleano em inteiro:
			// * false: [value] .slice (0) => resolver (valor)
			// * true: [valor] .slice (1) => resolver ()
			resolve.apply (indefinido, [valor] .slice (semValor));
		}

	// Para Promessas / A +, converta exceções em rejeições
	// Desde que o jQuery.when não se desenrola, podemos pular as verificações extras que aparecem em
	// Deferred # then para suprimir condicionalmente a rejeição.
	} catch (valor) {

		// Suporte: apenas Android 4.0
		// Funções de modo estrito invocadas sem .call / .apply obtêm contexto de objeto global
		reject.apply (indefinido, [valor]);
	}
}

jQuery.extend ({

	Adiada: function (func) {
		var tuples = [

				// ação, adicionar ouvinte, retornos de chamada,
				// ... então manipuladores, índice de argumentos, [estado final]
				["notify", "progress", jQuery.Callbacks ("memória"),
					jQuery.Callbacks ("memory"), 2],
				["resolver", "feito", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memory"), 0, "resolved"],
				["reject", "fail", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memory"), 1, "rejected"]
			]
			estado = "pendente",
			promessa = {
				função estatal() {
					estado de retorno;
				}
				sempre: function () {
					deferred.done (arguments) .fail (argumentos);
					devolva isto;
				}
				"catch": function (fn) {
					return promise.then (null, fn);
				}

				// Keep pipe para back-compat
				pipe: função (/ * fnDone, fnFail, fnProgress * /) {
					var fns = argumentos;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (tuplas, função (i, tupla) {

							// Mapeie tuplas (progresso, feito, falhe) para argumentos (concluído, falha, progresso)
							var fn = isFunction (fns [tuple [4]]) && fns [tuple [4]];

							// deferred.progress (function () {bind para newDefer ou newDefer.notify})
							// deferred.done (function () {bind para newDefer ou newDefer.resolve})
							// deferred.fail (function () {bind para newDefer ou newDefer.reject})
							deferred [tuple [1]] (function () {
								var returned = fn && fn.apply (isto, argumentos);
								if (retornado && isFunction (returned.promise)) {
									return.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} outro {
									newDefer [tuple [0] + "com"] (
										esta,
										fn? [retornou]: argumentos
									);
								}
							});
						});
						fns = nulo;
					} ).promessa();
				}
				then: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					função resolve (profundidade, adiada, manipulador, especial) {
						função de retorno () {
							var isso = isso,
								args = argumentos,
								mightThrow = function () {
									var retornou, então;

									// Suporte: Promessas / A + seção 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignora tentativas de resolução dupla
									if (profundidade <maxDepth) {
										Retorna;
									}

									retornado = handler.apply (que, args);

									// Suporte: Promessas / A + seção 2.3.1
									// https://promisesaplus.com/#point-48
									if (retornado === deferred.promise ()) {
										lançar novo TypeError ("Auto-resolução de fundo");
									}

									// Suporte: Promessas / A + seções 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recupera `then` apenas uma vez
									então = retornado &&

										// Suporte: Promessas / A + seção 2.3.4
										// https://promisesaplus.com/#point-64
										// Somente verifica objetos e funções para thenability
										(typeof retornado === "objeto" ||
											typeof retornado === "function") &&
										retornado.

									// Lidar com um letável retornado
									if (isFunction (então)) {

										// Processadores especiais (notificar) aguardem resolução
										if (especial) {
											Em seguida, ligue(
												devolvida,
												resolver (maxDepth, diferido, identidade, especial),
												resolver (maxDepth, deferred, Thrower, special)
											);

										// Processadores normais (resolver) também se encaixam no progresso
										} outro {

											// ... e desconsiderar valores de resolução mais antigos
											maxDepth ++;

											Em seguida, ligue(
												devolvida,
												resolver (maxDepth, diferido, identidade, especial),
												resolver (maxDepth, diferido, Thrower, especial),
												resolve (maxDepth, deferred, Identity,
													deferred.notifyWith)
											);
										}

									// Lidar com todos os outros valores retornados
									} outro {

										// Apenas os manipuladores substitutos passam no contexto
										// e vários valores (comportamento sem especificação)
										if (handler! == Identity) {
											isso = indefinido;
											args = [retornado];
										}

										// Processar o (s) valor (es)
										// O processo padrão é a resolução
										(special || deferred.resolveWith) (que, args);
									}
								}

								// Somente processadores normais (resolvem) capturam e rejeitam exceções
								process = special?
									mightThrow:
									function () {
										experimentar {
											mightThrow ();
										} pegar (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Suporte: Promessas / A + seção 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar exceções pós-resolução
											if (profundidade + 1> = maxDepth) {

												// Apenas os manipuladores substitutos passam no contexto
												// e vários valores (comportamento sem especificação)
												if (handler! == lançador) {
													isso = indefinido;
													args = [e];
												}

												deferred.rejectWith (que, args);
											}
										}
									};

							// Suporte: Promessas / A + seção 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolver promessas imediatamente para evitar a falsa rejeição de
							// erros subsequentes
							if (profundidade) {
								processo();
							} outro {

								// Chame um gancho opcional para gravar a pilha, em caso de exceção
								// já que é perdido quando a execução é assíncrona
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (processo);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuplas [0] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onProgress)?
									em progresso :
									Identidade,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add (...)
						tuplas [1] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									Identidade
							)
						);

						// rejected_handlers.add (...)
						tuplas [2] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onRejected)?
									onRejected:
									Atirador
							)
						);
					} ).promessa();
				}

				// Obter uma promessa para este diferido
				// Se obj for fornecido, o aspecto da promessa será adicionado ao objeto
				promessa: function (obj) {
					return obj! = null? jQuery.extend (obj, promessa): promessa;
				}
			}
			adiada = {};

		// Adicionar métodos específicos de lista
		jQuery.each (tuplas, função (i, tupla) {
			var list = tuple [2],
				stateString = tuple [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promessa [tuple [1]] = list.add;

			// Lidar com estado
			if (stateString) {
				list.add (
					function () {

						// state = "resolved" (isto é, preenchido)
						// state = "rejected"
						estado = stateString;
					}

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuplos [3 - i] [2] .disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuplos [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuplas [0] [2] .lock,

					// progress_handlers.lock
					tuplas [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			deferred [tuple [0]] = function () {
				deferred [tuple [0] + "com"] (isto === diferido? indefinido: isto, argumentos);
				devolva isto;
			};

			// deferred.notifyWith = list.fireCom
			// deferred.resolveWith = list.fireCom
			// deferred.rejectWith = list.fireCom
			deferred [tuple [0] + "com"] = list.fireCom;
		});

		// Faça a promessa adiada
		promessa.promise (diferido);

		// Chamada dada func if any
		if (func) {
			func.call (diferido, diferido);
		}

		// Tudo feito!
		retorno diferido;
	}

	// Auxiliar adiado
	quando: function (singleValue) {
		var

			// contagem de subordinados não concluídos
			restante = arguments.length,

			// contagem de argumentos não processados
			i = restante

			// dados de preenchimento subordinados
			resolveContexts = Array (i),
			resolveValues ​​= slice.call (argumentos),

			// o mestre Deferido
			mestre = jQuery.Deferred (),

			// fábrica de retorno de chamada subordinada
			updateFunc = função (i) {
				função de retorno (valor) {
					resolveContexts [i] = isto;
					resolveValues ​​[i] = arguments.length> 1? slice.call (argumentos): valor;
					if (! (--remaining)) {
						master.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// Argumentos simples e vazios são adotados como Promise.resolve
		if (restantes <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!remanescente );

			// Use .then () para desembrulhar secundários secundários (cf. gh-3000)
			if (master.state () === "pendente" ||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i]. então)) {

				return master.then ();
			}
		}

		// Vários argumentos são agregados como os elementos da matriz Promise.all
		enquanto eu-- ) {
			adoptValue (resolveValues ​​[i], updateFunc (i), master.reject);
		}

		return master.promise ();
	}
});


// Estes geralmente indicam um erro do programador durante o desenvolvimento,
// avisa sobre eles o mais rápido possível, em vez de engoli-los por padrão.
var rerrorNames = / ^ (Eval | Internal | Range | Referência | Sintaxe | Tipo | URI) Erro $ /;

jQuery.Deferred.exceptionHook = function (erro, pilha) {

	// Suporte: somente no IE 8 - 9
	// O console existe quando as ferramentas de desenvolvimento estão abertas, o que pode acontecer a qualquer momento
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ("exceção jQuery.Deferred:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		lançar erro;
	});
};




// O diferido usado no DOM pronto
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	lista pronta
		. então (fn)

		// Quebra jQuery.readyException em uma função para que a pesquisa
		// acontece no momento do tratamento de erros em vez do retorno de chamada
		// cadastro.
		.catch (função (erro) {
			jQuery.readyException (erro);
		});

	devolva isto;
};

jQuery.extend ({

	// O DOM está pronto para ser usado? Defina como verdadeiro quando ocorrer.
	isReady: false,

	// Um ​​contador para rastrear quantos itens esperar antes
	// o evento pronto é acionado. Veja # 6781
	readyWait: 1,

	// Manusear quando o DOM estiver pronto
	pronto: função (espera) {

		// Abortar se houver pendências pendentes ou já estamos prontos
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			Retorna;
		}

		// Lembre-se que o DOM está pronto
		jQuery.isReady = true;

		// Se um evento DOM Ready normal for disparado, decrementado e aguardar, se necessário
		if (wait! == true && --jQuery.readyWait> 0) {
			Retorna;
		}

		// Se houver funções ligadas, executar
		readyList.resolveWith (document, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// O manipulador de eventos pronto e o método de limpeza automática
function completed () {
	document.removeEventListener ("DOMContentLoaded", completed);
	window.removeEventListener ("load", completed);
	jQuery.ready ();
}

// Captura casos em que $ (document) .ready () é chamado
// após o evento do navegador já ter ocorrido.
// Suporte: IE <= 9 - 10 apenas
// IE mais antigo às vezes sinaliza "interativo" cedo demais
if (document.readyState === "completo" ||
	(document.readyState! == "loading" &&! document.documentElement.doScroll)) {

	// Lidar de forma assíncrona para permitir que os scripts tenham a oportunidade de atrasar
	window.setTimeout (jQuery.ready);

} outro {

	// Use o callback do evento útil
	document.addEventListener ("DOMContentLoaded", completed);

	// Um ​​fallback para window.onload, que sempre funcionará
	window.addEventListener ("load", completed);
}




// Método multifuncional para obter e definir valores de uma coleção
// O valor / s pode opcionalmente ser executado se for uma função
var access = function (elems, fn, chave, valor, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Define muitos valores
	if (toType (key) === "objeto") {
		Cadeia de caracteres = true;
		para (eu na chave) {
			acesso (elems, fn, i, chave [i], true, emptyGet, raw);
		}

	// Define um valor
	} else if (valor! == indefinido) {
		Cadeia de caracteres = true;

		if (! isFunction (value)) {
			raw = true;
		}

		if (bulk) {

			// Operações em massa são executadas em todo o conjunto
			if (raw) {
				fn.call (elems, valor);
				fn = nulo;

			// ... exceto ao executar valores de função
			} outro {
				bulk = fn;
				fn = function (elem, key, value) {
					return bulk.call (jQuery (elem), valor);
				};
			}
		}

		if (fn) {
			para (; i <len; i ++) {
				fn (
					elems [i], chave, cru?
					valor :
					value.call (elems [i], i, fn (elems [i], chave))
				);
			}
		}
	}

	if (chainable) {
		elems de retorno;
	}

	// fica
	if (bulk) {
		return fn.call (elems);
	}

	retornar len? fn (elems [0], chave): emptyGet;
};


// Corresponde a sequência tracejada para camelização
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Usado pelo camelCase como callback para replace ()
função fcamelCase (all, letter) {
	return letter.toUpperCase ();
}

// Converta tracejado para camelCase; usado pelos módulos css e de dados
// Suporte: IE <= 9 - 11, Edge 12 - 15
// Microsoft esqueceu de dar o prefixo do fornecedor (# 9572)
função camelCase (string) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (owner) {

	// Aceita apenas:
	// - Nó
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objeto
	// - Qualquer
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




função Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache: function (owner) {

		// Verifique se o objeto proprietário já possui um cache
		var value = owner [this.expando];

		// Se não, crie um
		if (! value) {
			valor = {};

			// Podemos aceitar dados para nós não elementares em navegadores modernos,
			// mas não devemos, veja # 8335.
			// Sempre retorna um objeto vazio.
			if (acceptData (owner)) {

				// Se é um nó improvável de ser stringificado ou colocado em loop
				// use designação simples
				if (owner.nodeType) {
					owner [this.expando] = valor;

				// Caso contrário, proteja-o em uma propriedade não enumerável
				// configurável deve ser true para permitir que a propriedade seja
				// excluído quando os dados são removidos
				} outro {
					Object.defineProperty (owner, this.expando, {
						valor: valor
						configurável: true
					});
				}
			}
		}

		valor de retorno;
	}
	set: function (owner, data, value) {
		var prop,
			cache = this.cache (dono);

		// Handle: [owner, key, value] args
		// Sempre use a chave camelCase (gh-2257)
		if (tipo de dados === "string") {
			cache [camelCase (data)] = valor;

		// Handle: [owner, {properties}] args
		} outro {

			// Copie as propriedades uma a uma para o objeto de cache
			para (prop em dados) {
				cache [camelCase (prop)] = dados [prop];
			}
		}
		cache de retorno;
	}
	get: function (owner, key) {
		tecla de retorno === indefinida?
			this.cache (owner):

			// Sempre use a chave camelCase (gh-2257)
			owner [this.expando] && owner [this.expando] [camelCase (chave)];
	}
	acesso: função (proprietário, chave, valor) {

		// Nos casos em que:
		//
		// 1. Nenhuma chave foi especificada
		// 2. Uma chave de cadeia foi especificada, mas nenhum valor foi fornecido
		//
		// Pegue o caminho "read" e permita que o método get determine
		// qual valor retornar, respectivamente:
		//
		// 1. O objeto de cache inteiro
		// 2. Os dados armazenados na chave
		//
		if (chave === indefinida ||
				((e && typeof key === "string") && valor === indefinido)) {

			return this.get (dono, chave);
		}

		// Quando a chave não é uma string ou uma chave e um valor
		// são especificados, definidos ou estendidos (objetos existentes) com:
		//
		// 1. Um objeto de propriedades
		// 2. Uma chave e valor
		//
		this.set (dono, chave, valor);

		// Como o caminho "set" pode ter dois pontos de entrada possíveis
		// retorna os dados esperados com base no caminho que foi tomado [*]
		valor de retorno! == indefinido? valor: chave;
	}
	remove: function (owner, key) {
		var i,
			cache = owner [this.expando];

		if (cache === indefinido) {
			Retorna;
		}

		if (chave! == indefinido) {

			// Suporte a array ou string de chaves separadas por espaços
			if (Array.isArray (key)) {

				// Se key é uma matriz de chaves ...
				// Sempre definimos as chaves camelCase, então remova isso.
				key = key.map (camelCase);
			} outro {
				key = camelCase (chave);

				// Se existir uma chave com os espaços, use-a.
				// Caso contrário, crie uma matriz combinando espaços não whitespace
				key = key in cache?
					[ chave ] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			enquanto eu-- ) {
				delete cache [chave [i]];
			}
		}

		// Remove o expando se não houver mais dados
		if (chave === indefinido || jQuery.isEmptyObject (cache)) {

			// Suporte: Chrome <= 35 - 45
			// O desempenho do Webkit & Blink sofre ao excluir propriedades
			// dos nós DOM, portanto, defina como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (restrição de bugs)
			if (owner.nodeType) {
				owner [this.expando] = indefinido;
			} outro {
				delete owner [this.expando];
			}
		}
	}
	hasData: function (owner) {
		var cache = owner [this.expando];
		cache de retorno! == indefinido &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = novos dados ();

var dataUser = new Data ();



// Resumo da Implementação
//
// 1. Enforce a compatibilidade de superfície e semântica da API com o ramo 1.9.x
// 2. Melhorar a capacidade de manutenção do módulo, reduzindo o armazenamento
// caminhos para um único mecanismo.
// 3. Use o mesmo mecanismo único para suportar dados "privados" e "usuários".
// 4. _Nunca_ expor dados "privados" ao código do usuário (TODO: Drop _data, _removeData)
// 5. Evite expor detalhes da implementação em objetos do usuário (ex. Expando properties)
// 6. Fornecer um caminho claro para a implementação da atualização para o WeakMap em 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

function getData (data) {
	if (dados === "true") {
		retorno verdadeiro;
	}

	if (dados === "false") {
		retorna falso;
	}

	if (dados === "null") {
		return null;
	}

	// Só converte em um número se não muda a string
	if (dados === + dados + "") {
		retorno + dados;
	}

	if (rbrace.test (data)) {
		return JSON.parse (data);
	}

	dados de retorno;
}

function dataAttr (elem, key, data) {
	nome var;

	// Se nada foi encontrado internamente, tente buscar qualquer
	// dados do atributo data-* do HTML5
	if (dados === undefined && elem.nodeType === 1) {
		name = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		data = elem.getAttribute (nome);

		if (tipo de dados === "string") {
			experimentar {
				dados = getData (dados);
			} pegar (e) {}

			// Certifique-se de que definimos os dados para que não sejam alterados mais tarde
			dataUser.set (elem, key, data);
		} outro {
			dados = indefinidos;
		}
	}
	dados de retorno;
}

jQuery.extend ({
	hasData: function (elem) {
		return dataUser.hasData (elem) || dataPriv.hasData (elem);
	}

	data: function (elem, name, data) {
		return dataUser.access (elem, nome, dados);
	}

	removeData: function (elem, name) {
		dataUser.remove (elem, name);
	}

	// TODO: Agora que todas as chamadas para _data e _removeData foram substituídas
	// com chamadas diretas para os métodos dataPriv, eles podem ser preteridos.
	_data: function (elem, name, data) {
		return dataPriv.access (elem, nome, dados);
	}

	_removeData: function (elem, name) {
		dataPriv.remove (elem, name);
	}
});

jQuery.fn.extend ({
	data: function (key, value) {
		var i, nome, dados,
			elem = isto [0],
			attrs = elem && elem.attributes;

		// Obtém todos os valores
		if (chave === indefinido) {
			if (this.length) {
				data = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					enquanto eu-- ) {

						// Suporte: somente no IE 11
						// Os elementos attrs podem ser nulos (# 14894)
						if (attrs [i]) {
							nome = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								nome = camelCase (name.slice (5));
								dataAttr (elem, nome, data [nome]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			dados de retorno;
		}

		// Define vários valores
		if (tipo de chave === "objeto") {
			return this.each (function () {
				dataUser.set (isto, chave);
			});
		}

		retorno de acesso (isso, function (value) {
			var dados;

			// O objeto de chamada jQuery (elemento corresponde) não está vazio
			// (e, portanto, tem um elemento aparece neste [0]) e o
			O parâmetro // `value` não foi indefinido. Um objeto jQuery vazio
			// resultará em `undefined` para elem = this [0] que irá
			// lança uma exceção se uma tentativa de ler um cache de dados é feita.
			if (elem && value === indefinido) {

				// Tentativa de obter dados do cache
				// A chave sempre será camelCased in Data
				data = dataUser.get (elem, key);
				if (dados! == indefinidos) {
					dados de retorno;
				}

				// Tentativa de "descobrir" os dados em
				// Dados personalizados de HTML5- * attrs
				data = dataAttr (elem, chave);
				if (dados! == indefinidos) {
					dados de retorno;
				}

				// Nós tentamos muito, mas os dados não existem.
				Retorna;
			}

			// Definir os dados ...
			this.each (function () {

				// Sempre armazenamos a chave camelCased
				dataUser.set (isto, chave, valor);
			});
		}, null, value, arguments.length> 1, nulo, verdadeiro);
	}

	removeData: function (key) {
		return this.each (function () {
			dataUser.remove (isto, chave);
		});
	}
});


jQuery.extend ({
	fila: function (elem, type, data) {
		fila var;

		if (elem) {
			type = (digite || "fx") + "fila";
			queue = dataPriv.get (elem, tipo);

			// Acelere o dequeue, saindo rapidamente se isso é apenas uma pesquisa
			if (data) {
				if (! queue || Array.isArray (data)) {
					queue = dataPriv.access (elem, tipo, jQuery.makeArray (data));
				} outro {
					fila.push (dados);
				}
			}
			fila de retorno || [];
		}
	}

	dequeue: function (elem, type) {
		type = type || "fx";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			ganchos = jQuery._queueHooks (elem, tipo),
			next = function () {
				jQuery.dequeue (elem, tipo);
			};

		// Se a fila de fx for retirada da fila, sempre remova o sentinela de progresso
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		if (fn) {

			// Adiciona um sentinel de progresso para evitar que a fila de fx seja
			// automaticamente dequeued
			if (tipo === "fx") {
				queue.unshift ("inprogress");
			}

			// Limpar a última função de parada da fila
			delete hooks.stop;
			fn.call (elem, next, hooks);
		}

		if (! startLength && ganchos) {
			hooks.empty.fire ();
		}
	}

	// Não público - gera um objeto queueHooks ou retorna o atual
	_queueHooks: function (elem, type) {
		var key = type + "queueHooks";
		return dataPriv.get (elem, key) || dataPriv.access (elem, key, {
			empty: jQuery.Callbacks ("once memory") .add (function () {
				dataPriv.remove (elem, [tipo + "fila", chave]);
			})
		});
	}
});

jQuery.fn.extend ({
	fila: function (type, data) {
		var setter = 2;

		if (typeof type! == "string") {
			dados = tipo;
			type = "fx";
			setter--;
		}

		if (arguments.length <setter) {
			return jQuery.queue (este [0], tipo);
		}

		dados de retorno === indefinidos?
			esta :
			this.each (function () {
				var queue = jQuery.queue (isso, tipo, dados);

				// Assegure os ganchos para esta fila
				jQuery._queueHooks (isso, tipo);

				if (tipo === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (isso, tipo);
				}
			});
	}
	dequeue: function (type) {
		return this.each (function () {
			jQuery.dequeue (isso, tipo);
		});
	}
	clearQueue: function (type) {
		return this.queue (digite || "fx", []);
	}

	// Obter uma promessa resolvida quando filas de um certo tipo
	// são esvaziados (fx é o tipo por padrão)
	promessa: function (type, obj) {
		var tmp,
			contagem = 1,
			adiar = jQuery.Deferred (),
			elementos = isto,
			i = this.length,
			resolve = function () {
				if (! (--count)) {
					defer.resolveWith (elementos, [elementos]);
				}
			};

		if (typeof type! == "string") {
			obj = tipo;
			type = indefinido;
		}
		type = type || "fx";

		enquanto eu-- ) {
			tmp = dataPriv.get (elementos [i], tipo + "queueHooks");
			if (tmp && tmp.empty) {
				contar ++;
				tmp.empty.add (resolver);
			}
		}
		resolver();
		return defer.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Top", "Direita", "Inferior", "Esquerda"];

var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree pode ser chamado da função de filtro # jQuery;
		// nesse caso, o elemento será o segundo argumento
		elem = el || elem;

		// O estilo inline supera tudo
		return elem.style.display === "nenhum" ||
			elem.style.display === "" &&

			// Caso contrário, verifique o estilo computado
			// Suporte: Firefox <= 43 - 45
			// Elementos desconectados podem ter display computado: none, então primeiro confirme que elem é
			// no documento.
			jQuery.contains (elem.ownerDocument, elem) &&

			jQuery.css (elem, "display") === "nenhum";
	};

var swap = function (elem, opções, callback, args) {
	var ret, nome,
		old = {};

	// Lembre-se dos valores antigos e insira os novos
	para (nome em opções) {
		old [name] = elem.style [name];
		elem.style [name] = opções [name];
	}

	ret = callback.apply (elem, args || []);

	// Reverta os valores antigos
	para (nome em opções) {
		elem.style [name] = old [name];
	}

	retorno ret;
};




function adjustCSS (elem, prop, valueParts, tween) {
	var ajustado, escala
		maxIterations = 20,
		currentValue = tween?
			function () {
				return tween.cur ();
			}:
			function () {
				return jQuery.css (elem, prop, "");
			}
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// O cálculo do valor inicial é necessário para possíveis incompatibilidades de unidade
		initialInUnit = (jQuery.cssNumber [prop] || unidade! == "px" && + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unidade) {

		// Suporte: Firefox <= 54
		// Reduz o valor alvo da iteração para evitar a interferência dos limites superiores do CSS (gh-2144)
		inicial = inicial / 2;

		// Confie nas unidades relatadas pelo jQuery.css
		unidade = unidade || initialInUnit [3];

		// Aproximação iterativa de um ponto de partida diferente de zero
		initialInUnit = + inicial || 1;

		while (maxIterations--) {

			// Avalie e atualize nosso melhor palpite (duplicando as suposições de que zerar).
			// Termine se a escala for igual ou cruzar 1 (tornando o antigo * novo produto não positivo).
			jQuery.style (elem, prop, initialInUnit + unit);
			if ((1 - scale) * (1 - (scale = currentValue () / inicial || 0.5)) <= 0) {
				maxIterações = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unit);

		// Certifique-se de atualizar as propriedades da interpolação mais tarde
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + inicial || 0;

		// Aplique o offset relativo (+ = / - =) se especificado
		ajustado = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		if (tween) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

function getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nodeName];

	if (display) {
		exibição de retorno;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (exibir === "nenhum") {
		display = "block";
	}
	defaultDisplayMap [nodeName] = display;

	exibição de retorno;
}

function showHide (elementos, show) {
	var display, elem,
		values ​​= [],
		índice = 0,
		length = elements.length;

	// Determina o novo valor de exibição para elementos que precisam mudar
	para (; index <length; index ++) {
		elem = elementos [índice];
		if (! elem.style) {
			continuar;
		}

		display = elem.style.display;
		if (show) {

			// Como nós forçamos visibilidade sobre elementos ocultos em cascata, um imediato (e lento)
			// check é necessário neste primeiro loop, a menos que tenhamos um valor de exibição não vazio (ou
			// inline ou prestes a ser restaurado)
			if (exibir === "nenhum") {
				valores [index] = dataPriv.get (elem, "display") || nulo;
				if (! valores [index]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valores [index] = getDefaultDisplay (elem);
			}
		} outro {
			if (exibir! == "nenhum") {
				valores [index] = "nenhum";

				// Lembre-se do que estamos sobrescrevendo
				dataPriv.set (elem, "display", display);
			}
		}
	}

	// Defina a exibição dos elementos em um segundo loop para evitar refluxo constante
	para (índice = 0; índice <comprimento; índice ++) {
		if (valores [index]! = null) {
			elementos [index] .style.display = valores [index];
		}
	}

	elementos de retorno;
}

jQuery.fn.extend ({
	show: function () {
		return showHide (isso, verdadeiro);
	}
	hide: function () {
		return showOcultar (isto);
	}
	toggle: function (state) {
		if (tipo de estado === "booleano") {
			estado de retorno? this.show (): this.hide ();
		}

		return this.each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} outro {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: checkbox | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +) / i);

var rscriptType = (/ ^ $ | ^ módulo $ | \ / (?: java | ecma) script / i);



// Temos que fechar essas tags para suportar XHTML (# 13200)
var wrapMap = {

	// Suporte: IE <= 9 apenas
	opção: [1, "<select multiple = 'multiple'>", "</ select>"],

	// Analisadores XHTML não inserem magicamente elementos no
	// da mesma maneira que os analisadores de sopa de tag fazem. Então não podemos encurtar
	// isto omitindo <tbody> ou outros elementos requeridos.
	thead: [1, "<table>", "</ table>"],
	col: [2, "<table> <colgroup>", "</ colgroup> </ table>"],
	tr: [2, "<table> <tbody>", "</ tbody> </ table>"],
	td: [3, "<table> <tbody> <tr>", "</ tr> </ tbody> </ table>"],

	_default: [0, "", ""]
};

// Suporte: IE <= 9 apenas
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll (contexto, tag) {

	// Suporte: IE <= 9 - 11 apenas
	// Use typeof para evitar a invocação do método de argumento zero nos objetos do host (# 15151)
	var ret;

	if (tipo de contexto.getElementsByTagName! == "indefinido") {
		ret = context.getElementsByTagName (tag || "*");

	} else if (tipo de context.querySelectorAll! == "indefinido") {
		ret = context.querySelectorAll (tag || "*");

	} outro {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (contexto, tag)) {
		return jQuery.merge ([contexto], ret);
	}

	retorno ret;
}


// Marcar scripts como tendo sido avaliados
function setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"globalEval",
			REFLETS || dataPriv.get (refElements [i], "globalEval")
		);
	}
}


var rhtml = / <& & #? \ w +;

function buildFragment (elems, contexto, scripts, seleção, ignorado) {
	var elem, tmp, tag, wrap, contém, j,
		fragment = context.createDocumentFragment (),
		nós = [],
		i = 0,
		l = elems.length;

	para (; i <l; i ++) {
		elem = elems [i];

		if (elem || elem === 0) {

			// Adicionar nós diretamente
			if (toType (elem) === "objeto") {

				// Suporte: Android <= 4.0 apenas, somente PhantomJS 1
				// push.apply (_, arraylike) é lançado no antigo WebKit
				jQuery.merge (nós, elem.nodeType? [elem]: elem);

			// Converta não-html em um nó de texto
			} else if (! rhtml.test (elem)) {
				nodes.push (context.createTextNode (elem));

			// Converter html em nós DOM
			} outro {
				tmp = tmp || fragment.appendChild (context.createElement ("div"));

				// Desserializar uma representação padrão
				tag = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// Descer pelos wrappers para o conteúdo certo
				j = wrap [0];
				while (j--) {
					tmp = tmp.lastChild;
				}

				// Suporte: Android <= 4.0 apenas, somente PhantomJS 1
				// push.apply (_, arraylike) é lançado no antigo WebKit
				jQuery.merge (nós, tmp.childNodes);

				// Lembre-se do contêiner de nível superior
				tmp = fragment.firstChild;

				// Assegure-se de que os nós criados sejam órfãos (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// Remover o wrapper do fragmento
	fragment.textContent = "";

	i = 0;
	while ((elem = nós [i ++]))) {

		// Pular elementos que já estão na coleção de contexto (trac-4087)
		if (seleção && jQuery.inArray (elem, seleção)> -1) {
			if (ignorado) {
				ignored.push (elem);
			}
			continuar;
		}

		contains = jQuery.contains (elem.ownerDocument, elem);

		// Anexar ao fragmento
		tmp = getAll (fragment.appendChild (elem), "script");

		// Preservar o histórico de avaliação do script
		if (contém) {
			setGlobalEval (tmp);
		}

		// Capturar executáveis
		if (scripts) {
			j = 0;
			while ((elem = tmp [j ++]))) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	fragmento de retorno;
}


(function () {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ("div")),
		input = document.createElement ("input");

	// Suporte: Android 4.0 - 4.3 apenas
	// Verifique o estado perdido se o nome estiver definido (# 11217)
	// Suporte: Windows Web Apps (WWA)
	// `name` e` type` devem usar .setAttribute para WWA (# 14901)
	input.setAttribute ("type", "radio");
	input.setAttribute ("verificado", "verificado");
	input.setAttribute ("name", "t");

	div.appendChild (entrada);

	// Suporte: Android <= 4.1 apenas
	// O WebKit antigo não clonar o estado verificado corretamente em fragmentos
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// Suporte: IE <= 11 apenas
	// Verifique se a textarea (e a caixa de seleção) defaultValue está devidamente clonada
	div.innerHTML = "<textarea> x </ textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;
}) ();
var documentElement = document.documentElement;



var
	rkeyEvent = / ^ chave /,
	rmouseEvent = / ^ (?: mouse | ponteiro | contextmenu | arrastar | soltar) | clique em /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue () {
	retorno verdadeiro;
}

function returnFalse () {
	retorna falso;
}

// Suporte: IE <= 9 apenas
// Veja # 13393 para mais informações
function safeActiveElement () {
	experimentar {
		retornar document.activeElement;
	} pegar (err) {}
}

função em (elem, tipos, seletor, dados, fn, um) {
	var origFn, tipo;

	// Tipos podem ser um mapa de tipos / manipuladores
	if (typeof types === "objeto") {

		// (types-Object, selector, data)
		if (tipo de seletor! == "string") {

			// (types-Object, data)
			dados = dados || seletor;
			seletor = indefinido;
		}
		para (digite em tipos) {
			on (elem, tipo, seletor, data, tipos [tipo], um);
		}
		return elem;
	}

	if (dados == null && fn == null) {

		// (types, fn)
		fn = seletor;
		data = seletor = indefinido;
	} else if (fn == null) {
		if (tipo de seletor === "string") {

			// (types, selector, fn)
			fn = dados;
			dados = indefinidos;
		} outro {

			// (types, data, fn)
			fn = dados;
			dados = seletor;
			seletor = indefinido;
		}
	}
	if (fn === false) {
		fn = returnFalse;
	} else if (! fn) {
		return elem;
	}

	se (um === 1) {
		origFn = fn;
		fn = function (event) {

			// Pode usar um conjunto vazio, pois o evento contém as informações
			jQuery (). off (evento);
			return origFn.apply (isto, argumentos);
		};

		// Use o mesmo guid para que o chamador possa remover usando origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	return elem.each (function () {
		jQuery.event.add (isto, tipos, fn, dados, seletor);
	});
}

/ *
 * Funções auxiliares para gerenciar eventos - não fazem parte da interface pública.
 Adere à biblioteca addEvent de Dean Edwards para muitas das idéias.
 * /
jQuery.event = {

	global: {},

	add: function (elem, tipos, manipulador, dados, seletor) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.get (elem);

		// Não anexe eventos a nós noData ou text / comment (mas permita objetos simples)
		if (! elemData) {
			Retorna;
		}

		// O chamador pode passar um objeto de dados personalizados em vez do manipulador
		if ( handler.handler) {
			handleObjIn = manipulador;
			manipulador = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Garanta que os seletores inválidos lançam exceções no momento da anexação
		// Avaliar contra documentElement no caso elem é um nó não-elemento (por exemplo, documento)
		if (selector) {
			jQuery.find.matchesSelector (documentElement, selector);
		}

		// Certifique-se de que o manipulador tenha um ID exclusivo, usado para encontrá-lo / removê-lo depois
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// Inicia a estrutura de eventos do elemento e o manipulador principal, se este for o primeiro
		if (! (events = elemData.events)) {
			events = elemData.events = {};
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {

				// Descarta o segundo evento de um jQuery.event.trigger () e
				// quando um evento é chamado depois que uma página é descarregada
				return typeof jQuery! == "undefined" && jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, arguments): indefinido;
			};
		}

		// Lidar com vários eventos separados por um espaço
		types = (tipos || "") .match (rnothtmlwhite) || [""];
		t = types.length;
		while (t--) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// Há * deve * ser um tipo, sem manipuladores somente de namespace de anexação
			if (! type) {
				continuar;
			}

			// Se o evento alterar seu tipo, use os manipuladores de eventos especiais para o tipo alterado
			special = jQuery.event.special [type] || {};

			// Se o seletor definido, determine o tipo de api do evento especial, caso contrário, digite
			type = (seletor? special.delegateType: special.bindType) || tipo;

			// Atualizar especial com base no novo tipo de redefinição
			special = jQuery.event.special [type] || {};

			// handleObj é passado para todos os manipuladores de eventos
			handleObj = jQuery.extend ({
				tipo: tipo
				origType: origType,
				dados: dados,
				manipulador: manipulador,
				guid: handler.guid,
				seletor: seletor
				needsContext: selector && jQuery.expr.match.needsContext.test (seletor),
				namespace: namespaces.join (".")
			}, handleObjIn);

			// Inicia a fila do manipulador de eventos se formos o primeiro
			if (! (manipuladores = eventos [tipo])) {
				manipuladores = events [type] = [];
				handlers.delegateCount = 0;

				// Use somente addEventListener se o manipulador de eventos especiais retornar false
				if (! special.setup ||
					special.setup.call (elem, data, namespaces, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (type, eventHandle);
					}
				}
			}

			if (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Adicionar à lista de manipuladores do elemento, delegados na frente
			if (selector) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} outro {
				handlers.push (handleObj);
			}

			// Acompanhe quais eventos já foram usados, para otimização de eventos
			jQuery.event.global [type] = true;
		}

	}

	// Desanexar um evento ou conjunto de eventos de um elemento
	remove: function (elem, tipos, manipulador, seletor, mappedTypes) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (events = elemData.events)) {
			Retorna;
		}

		// Uma vez para cada tipo.nome de nomes em tipos; tipo pode ser omitido
		types = (tipos || "") .match (rnothtmlwhite) || [""];
		t = types.length;
		while (t--) {
			tmp = rtypenamespace.exec (tipos [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// Desvincular todos os eventos (neste namespace, se fornecidos) para o elemento
			if (! type) {
				para (digite eventos) {
					jQuery.event.remove (elem, tipo + tipos [t], manipulador, seletor, true);
				}
				continuar;
			}

			special = jQuery.event.special [type] || {};
			type = (seletor? special.delegateType: special.bindType) || tipo;
			manipuladores = eventos [tipo] || [];
			tmp = tmp [2] &&
				new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. $)");

			// Remover eventos correspondentes
			origCount = j = handlers.length;
			while (j--) {
				handleObj = manipuladores [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(seletor! || selector === handleObj.selector ||
						selector === "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Remove o manipulador genérico de eventos se removermos algo e não houver mais manipuladores
			// (evita o potencial de recursão infinita durante a remoção de manipuladores de eventos especiais)
			if (origCount &&! handlers.length) {
				if (! special.teardown ||
					special.teardown.call (elem, namespaces, elemData.handle) === false) {

					jQuery.removeEvent (elem, tipo, elemData.handle);
				}

				delete events [type];
			}
		}

		// Remove dados e o expando se não for mais usado
		if (jQuery.isEmptyObject (events)) {
			dataPriv.remove (elem, "manipular eventos");
		}
	}

	dispatch: function (nativeEvent) {

		// Crie um jQuery.Event gravável a partir do objeto de evento nativo
		var event = jQuery.event.fix (nativeEvent);

		var i, j, ret, correspondido, handleObj, handlerQueue,
			args = new Array (arguments.length),
			handlers = (dataPriv.get (this, "events") || {}) [event.type] || []
			special = jQuery.event.special [event.type] || {};

		// Use o jQuery.Event corrigido em vez do evento nativo (somente leitura)
		args [0] = evento;

		para (i = 1; i <arguments.length; i ++) {
			args [i] = argumentos [i];
		}

		event.delegateTarget = isto;

		// Chame o gancho preDispatch para o tipo mapeado e deixe-o sair se desejado
		if (special.preDispatch && special.preDispatch.call (isto, evento) === false) {
			Retorna;
		}

		// Determinar manipuladores
		handlerQueue = jQuery.event.handlers.call (este, evento, manipuladores);

		// Executa os delegados primeiro; eles podem querer parar a propagação abaixo de nós
		i = 0;
		while ((correspondido = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = correspondido.elem;

			j = 0;
			while ((handleObj = correspondência.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// O evento acionado deve 1) não ter namespace ou 2) ter namespace (s)
				// um subconjunto ou igual àqueles no evento ligado (ambos podem não ter namespace).
				if (! event.rnamespace || event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (correspondido.elem, args);

					if (ret! == undefined) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Chame o gancho postDispatch para o tipo mapeado
		if (special.postDispatch) {
			special.postDispatch.call (this, event);
		}

		return event.result;
	}

	manipuladores: function (event, handlers) {
		var i, handleObj, sel, correspondênciaHandlers, correspondedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Encontrar manipuladores delegados
		if (delegateCount &&

			// Suporte: IE <= 9
			// Árvores de instância SVG <use> do Black-hole (trac-13180)
			cur.nodeType &&

			// Suporte: Firefox <= 42
			// Suprime cliques em violação de especificação, indicando um botão de ponteiro não primário (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Suporte: somente no IE 11
			// ... mas não a tecla de seta "cliques" das entradas de rádio, que podem ter o `botão` -1 (gh-2343)
			! (event.type === "click" && event.button> = 1)) {

			para (; cur! == this; cur = cur.parentNode || this) {

				// Não verificar não-elementos (# 13208)
				// Não processe cliques em elementos desativados (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 &&! (event.type === "click" && cur.disabled === true)) {
					matchedHandlers = [];
					matchedSelectors = {};
					para (i = 0; i <delegateCount; i ++) {
						handleObj = manipuladores [i];

						// Não entre em conflito com as propriedades Object.prototype (# 13203)
						sel = handleObj.selector + "";

						if (matchedSelectors [sel] === indefinido) {
							matchedSelectors [sel] = handleObj.needsContext?
								jQuery (sel, this) .index (cur)> -1:
								jQuery.find (sel, isto, null, [cur]) .length;
						}
						if (matchedSelectors [sel]) {
							matchedHandlers.push (handleObj);
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push ({elem: cur, handlers: matchedHandlers});
					}
				}
			}
		}

		// Adicionar os manipuladores restantes (diretamente ligados)
		cur = isto;
		if (delegateCount <handlers.length) {
			handlerQueue.push ({elem: cur, manipuladores: handlers.slice (delegateCount)});
		}

		return handlerQueue;
	}

	addProp: function (name, hook) {
		Object.defineProperty (jQuery.Event.prototype, name, {
			enumerável: true
			configurável: true

			get: isFunction (gancho)?
				function () {
					if (this.originalEvent) {
							gancho de retorno (this.originalEvent);
					}
				}:
				function () {
					if (this.originalEvent) {
							return this.originalEvent [nome];
					}
				}

			set: function (value) {
				Object.defineProperty (este, nome, {
					enumerável: true
					configurável: true
					gravável: true
					valor: valor
				});
			}
		});
	}

	correção: function (originalEvent) {
		return originalEvent [jQuery.expando]?
			originalEvent:
			novo jQuery.Event (originalEvent);
	}

	special: {
		carga: {

			// Impede eventos image.load acionados de bubbling para window.load
			noBubble: true
		}
		focus: {

			// Incendeia o evento nativo, se possível, para que a sequência de desfoque / foco esteja correta
			trigger: function () {
				if (this! == safeActiveElement () && this.focus) {
					this.focus ();
					retorna falso;
				}
			}
			delegateType: "focusin"
		}
		blur: {
			trigger: function () {
				if (this === safeActiveElement () && this.blur) {
					this.blur ();
					retorna falso;
				}
			}
			delegateType: "focusout"
		}
		clique: {

			// Para a caixa de seleção, acione o evento nativo para que o estado marcado esteja correto
			trigger: function () {
				if (this.type === "checkbox" && this.click && nodeName (isto, "input")) {
					this.click ();
					retorna falso;
				}
			}

			// Para consistência entre navegadores, não dispare nativo .click () nos links
			_default: function (event) {
				return nodeName (event.target, "a");
			}
		}

		beforeunload: {
			postDispatch: function (event) {

				// Suporte: Firefox 20+
				// O Firefox não alerta se o campo returnValue não está definido.
				if (event.result! == undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function (elem, type, handle) {

	// Esse "if" é necessário para objetos simples
	if (elem.removeEventListener) {
		elem.removeEventListener (tipo, identificador);
	}
};

jQuery.Event = function (src, props) {

	// Permitir instanciação sem a palavra-chave "new"
	if (! (esta instância de jQuery.Event)) {
		return new jQuery.Event (src, props);
	}

	// objeto de evento
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// Eventos borbulhando o documento pode ter sido marcado como impedido
		// por um manipulador abaixo da árvore; refletir o valor correto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Suporte: Android <= 2,3 apenas
				src.returnValue === false?
			returnTrue:
			retorna falso;

		// Criar propriedades de destino
		// Suporte: Safari <= 6 - 7 apenas
		// O alvo não deve ser um nó de texto (# 504, # 13143)
		this.target = (src.target && src.target.nodeType === 3)?
			src.target.parentNode:
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} outro {
		this.type = src;
	}

	// Coloque propriedades explicitamente fornecidas no objeto de evento
	if (props) {
		jQuery.extend (isso, adereços);
	}

	// Cria um timestamp se o evento de entrada não tiver um
	this.timeStamp = src && src.timeStamp || Date.now ();

	// Marcar como fixo
	isso [jQuery.expando] = true;
};

// jQuery.Event é baseado em eventos DOM3 conforme especificado pela vinculação de idioma ECMAScript
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	construtor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulado: falso,

	preventDefault: function () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if (e &&! this.isSimulated) {
			e.preventDefault ();
		}
	}
	stopPropagation: function () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopPropagation ();
		}
	}
	stopImmediatePropagation: function () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// Inclui todos os suportes de eventos comuns, incluindo adereços específicos de KeyEvent e MouseEvent
jQuery.each ({
	altKey: true
	bolhas: verdadeiro
	cancelável: true
	changedTouches: true
	ctrlKey: true
	detalhe: verdadeiro
	eventPhase: true
	metaKey: true
	pageX: true
	pageY: true
	shiftKey: true
	vista: verdadeiro
	"char": verdadeiro
	charCode: true
	chave: verdadeiro
	keyCode: true
	botão: verdadeiro
	botões: verdadeiro
	clientX: true
	clientY: true
	offsetX: true
	offsetY: true
	pointerId: true
	pointerType: true
	screenX: true
	screenY: true
	targetTouches: true
	toElement: true
	toques: verdade

	qual: function (event) {
		var button = event.button;

		// Adiciona qual dos principais eventos
		if (event.which == null && rkeyEvent.test (event.type)) {
			return event.charCode! = null? event.charCode: event.keyCode;
		}

		// Adicione qual por clique: 1 === esquerda; 2 === meio; 3 === direito
		if (! event.which && button! == undefined && rmouseEvent.test (event.type)) {
			se (botão e 1) {
				return 1;
			}

			se (botão e 2) {
				return 3;
			}

			se (botão e 4) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp);

// Cria eventos de mouse / leave usando mouseover / out e verificações de evento
// para que a delegação de eventos funcione no jQuery.
// Faça o mesmo para pointerenter / pointerleave e pointerover / pointerout
//
// Suporte: somente no Safari 7
// O Safari envia o mouse com muita freqüência; Vejo:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para a descrição do bug (também existia nas versões antigas do Chrome).
jQuery.each ({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	ponteiro: "pointerover",
	ponteiro: "ponteiro"
}, function (orig, fix) {
	jQuery.event.special [orig] = {
		delegateType: corrigir,
		bindType: correção

		handle: function (event) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// Para mouseenter / leave, chame o manipulador se o relacionado estiver fora do destino.
			// NB: Não relatedTarget se o mouse saiu / entrou na janela do navegador
			if (! related || (relacionado! == alvo &&! jQuery.contains (alvo, relacionado))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (isto, argumentos);
				event.type = corrigir;
			}
			retorno ret;
		}
	};
});

jQuery.fn.extend ({

	em: function (types, selector, data, fn) {
		retornar (isto, tipos, seletor, dados, fn);
	}
	um: function (types, selector, data, fn) {
		retornar (isto, tipos, seletor, dados, fn, 1);
	}
	off: function (tipos, seletor, fn) {
		var handleObj, tipo;
		if (types && types.preventDefault && types.handleObj) {

			// (evento) despachou jQuery.Event
			handleObj = types.handleObj;
			jQuery (types.delegateTarget) .off (
				handleObj.namespace?
					handleObj.origType + "." + handleObj.namespace:
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			devolva isto;
		}
		if (typeof types === "objeto") {

			// (objeto-tipos [, seletor])
			para (digite em tipos) {
				this.off (tipo, seletor, tipos [tipo]);
			}
			devolva isto;
		}
		if (selector === false || tipo de selector === "function") {

			// (types [, fn])
			fn = seletor;
			seletor = indefinido;
		}
		if (fn === false) {
			fn = returnFalse;
		}
		return this.each (function () {
			jQuery.event.remove (this, types, fn, selector);
		});
	}
});


var

	/ * eslint-disable max-len * /

	// Veja https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = / <(área ?! | br | col | embed | h | img | entrada | link | meta | param) (([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) [^>] *) \ /> / gi,

	/ * eslint-enable * /

	// Suporte: IE <= 10 - 11, somente Edge 12 - 13
	// No IE / Edge usando grupos regex, isso causa lentidões severas.
	// Veja https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <script | <estilo | <link / i,

	// checked = "checked" ou marcado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <! (?: \ [CDATA \ [| -) | (?: \] \] | -)> \ s * $ / g;

// Prefira um tbody sobre sua tabela pai para conter novas linhas
function manipulationTarget (elem, content) {
	if (nodeName (elem, "table") &&
		nodeName (content.nodeType! == 11? content: content.firstChild, "tr")) {

		return jQuery (elem) .children ("tbody") [0] || elem;
	}

	return elem;
}

// Substituir / restaurar o atributo type de elementos de script para manipulação segura de DOM
função disableScript (elem) {
	elem.type = (elem.getAttribute ("type")! == null) + "/" + elem.type;
	return elem;
}
função restoreScript (elem) {
	if ((elem.type || "") .slice (0, 5) === "true /") {
		elem.type = elem.type.slice (5);
	} outro {
		elem.removeAttribute ("type");
	}

	return elem;
}

função cloneCopyEvent (src, dest) {
	var i, l, tipo, pdataOld, pdataCur, udataOld, udataCur, eventos;

	if (dest.nodeType! == 1) {
		Retorna;
	}

	// 1. Copiar dados privados: eventos, manipuladores, etc.
	if (dataPriv.hasData (src)) {
		pdataOld = dataPriv.access (src);
		pdataCur = dataPriv.set (dest, pdataOld);
		events = pdataOld.events;

		if (eventos) {
			delete pdataCur.handle;
			pdataCur.events = {};

			para (digite eventos) {
				para (i = 0, l = eventos [tipo]. comprimento; i <l; i ++) {
					jQuery.event.add (dest, tipo, eventos [tipo] [i]);
				}
			}
		}
	}

	// 2. Copiar dados do usuário
	if (dataUser.hasData (src)) {
		udataOld = dataUser.access (src);
		udataCur = jQuery.extend ({}, udataOld);

		dataUser.set (dest, udataCur);
	}
}

// Corrigir bugs do IE, veja testes de suporte
função fixInput (src, dest) {
	var nodeName = dest.nodeName.toLowerCase ();

	// Falha ao persistir o estado verificado de uma caixa de seleção ou botão de opção clonado.
	if (nodeName === "entrada" && rcheckableType.test (src.type)) {
		dest.checked = src.checked;

	// Não retorna a opção selecionada ao estado selecionado padrão quando as opções de clonagem
	} else if (nodeName === "entrada" || nodeName === "textarea") {
		dest.defaultValue = src.defaultValue;
	}
}

função domManip (collection, args, callback, ignorado) {

	// Achatar quaisquer matrizes aninhadas
	args = concat.apply ([], args);

	var fragmento, primeiro, scripts, hasScripts, nó, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		valor = args [0],
		valueIsFunction = isFunction (valor);

	// Não podemos clonar fragmentos de Node que contêm check, no WebKit
	if (valueIsFunction ||
			(l> 1 && typeof value === "string" &&
				! support.checkClone && rchecked.test (valor))) {
		return collection.each (function (index) {
			var self = collection.eq (índice);
			if (valueIsFunction) {
				args [0] = value.call (this, index, self.html ());
			}
			domManip (self, args, callback, ignorado);
		});
	}

	if (l) {
		fragmento = buildFragment (args, coleção [0] .ownerDocument, false, coleção, ignorado);
		first = fragment.firstChild;

		if (fragment.childNodes.length === 1) {
			fragmento = primeiro;
		}

		// Exigir novo conteúdo ou interesse em elementos ignorados para invocar o retorno de chamada
		if (primeiro || ignorado) {
			scripts = jQuery.map (getAll (fragmento, "script"), disableScript);
			hasScripts = scripts.length;

			// Use o fragmento original para o último item
			// em vez do primeiro porque pode acabar
			// sendo esvaziado incorretamente em certas situações (# 8070).
			para (; i <l; i ++) {
				nó = fragmento;

				if (i! == iNoClone) {
					node = jQuery.clone (nó, verdadeiro, verdadeiro);

					// Mantém referências a scripts clonados para restauração posterior
					if (hasScripts) {

						// Suporte: Android <= 4.0 apenas, somente PhantomJS 1
						// push.apply (_, arraylike) é lançado no antigo WebKit
						jQuery.merge (scripts, getAll (nó, "script"));
					}
				}

				callback.call (coleção [i], nó, i);
			}

			if (hasScripts) {
				doc = scripts [scripts.length - 1] .ownerDocument;

				// Scripts reativáveis
				jQuery.map (scripts, restoreScript);

				// Avalie scripts executáveis ​​na primeira inserção do documento
				para (i = 0; i <hasScripts; i ++) {
					node = scripts [i];
					if (rscriptType.test (node.type || "") &&
						! dataPriv.access (nó, "globalEval") &&
						jQuery.contains (doc, node)) {

						if (node.src && (node.type || "") .toLowerCase ()! == "módulo") {

							// Dependência AJAX opcional, mas não executará scripts se não estiver presente
							if (jQuery._evalUrl) {
								jQuery._evalUrl (node.src);
							}
						} outro {
							DOMEval (node.textContent.replace (rcleanScript, ""), doc, nó);
						}
					}
				}
			}
		}
	}

	coleta de retorno;
}

função remove (elem, selector, keepData) {
	nó var,
		nós = seletor? jQuery.filter (selector, elem): elem,
		i = 0;

	para (; (nó = nós [i])! = nulo; i ++) {
		if (! keepData && node.nodeType === 1) {
			jQuery.cleanData (getAll (nó));
		}

		if (node.parentNode) {
			if (keepData && jQuery.contains (node.ownerDocument, node)) {
				setGlobalEval (getAll (nó, "script"));
			}
			node.parentNode.removeChild (node);
		}
	}

	return elem;
}

jQuery.extend ({
	htmlPrefilter: function (html) {
		return html.replace (rxhtmlTag, "<$ 1> </ $ 2>");
	}

	clone: ​​function (elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode (true),
			inPage = jQuery.contains (elem.ownerDocument, elem);

		// Corrigir problemas de clonagem do IE
		if (! support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				! jQuery.isXMLDoc (elem)) {

			// Nós evitamos o Sizzle aqui por questões de performance: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (clone);
			srcElements = getAll (elem);

			para (i = 0, l = srcElements.length; i <l; i ++) {
				fixInput (srcElements [i], destElements [i]);
			}
		}

		// Copie os eventos do original para o clone
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (elem);
				destElements = destElements || getAll (clone);

				para (i = 0, l = srcElements.length; i <l; i ++) {
					cloneCopyEvent (srcElements [i], destElements [i]);
				}
			} outro {
				cloneCopyEvent (elem, clone);
			}
		}

		// Preservar o histórico de avaliação do script
		destElements = getAll (clone, "script");
		if (destElements.length> 0) {
			setGlobalEval (destElements,! inPage && getAll (elem, "script"));
		}

		// Retorna o conjunto clonado
		retornar clone;
	}

	cleanData: function (elems) {
		var data, elem, tipo,
			special = jQuery.event.special,
			i = 0;

		for (; (elem = elems [i])! == indefinido; i ++) {
			if (acceptData (elem)) {
				if ((data = elem [dataPriv.expando])) {
					if (data.events) {
						para (digite em data.events) {
							if (special [type]) {
								jQuery.event.remove (elem, tipo);

							// Este é um atalho para evitar a sobrecarga do jQuery.event.remove
							} outro {
								jQuery.removeEvent (elem, type, data.handle);
							}
						}
					}

					// Suporte: Chrome <= 35 - 45+
					// Atribua undefined em vez de usar delete, consulte Data # remove
					elem [dataPriv.expando] = indefinido;
				}
				if (elem [dataUser.expando]) {

					// Suporte: Chrome <= 35 - 45+
					// Atribua undefined em vez de usar delete, consulte Data # remove
					elem [dataUser.expando] = indefinido;
				}
			}
		}
	}
});

jQuery.fn.extend ({
	desanexar: função (seletor) {
		return remove (isso, seletor, true);
	}

	remove: function (selector) {
		return remove (este, seletor);
	}

	text: function (value) {
		retorno de acesso (isso, function (value) {
			valor de retorno === indefinido?
				jQuery.text (this):
				this.empty (). each (function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = valor;
					}
				});
		}, null, value, arguments.length);
	}

	acrescentar: function () {
		retornar domManip (isso, argumentos, função (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (isso, elem);
				target.appendChild (elem);
			}
		});
	}

	prepend: function () {
		retornar domManip (isso, argumentos, função (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = manipulationTarget (isso, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	}

	before: function () {
		retornar domManip (isso, argumentos, função (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this);
			}
		});
	}

	depois: function () {
		retornar domManip (isso, argumentos, função (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	}

	empty: function () {
		var elem,
			i = 0;

		para (; (elem = this [i])! = nulo; i ++) {
			if (elem.nodeType === 1) {

				// Previne vazamentos de memória
				jQuery.cleanData (getAll (elem, false));

				// Remove quaisquer nós restantes
				elem.textContent = "";
			}
		}

		devolva isto;
	}

	clone: ​​function (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null? false: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? dataAndEvents: deepDataAndEvents;

		return this.map (function () {
			return jQuery.clone (this, dataAndEvents, deepDataAndEvents);
		});
	}

	html: function (value) {
		retorno de acesso (isso, function (value) {
			var elem = this [0] || {}
				i = 0,
				l = this.length;

			if (valor === undefined && elem.nodeType === 1) {
				return elem.innerHTML;
			}

			// Veja se podemos pegar um atalho e usar innerHTML
			if (tipo de valor === "string" &&! rnoInnerhtml.test (valor) &&
				! wrapMap [(rtagName.exec (value) || ["", ""]) [1] .toLowerCase ()]) {

				value = jQuery.htmlPrefilter (valor);

				experimentar {
					para (; i <l; i ++) {
						elem = isso [i] || {};

						// Remove nós de elemento e evita vazamentos de memória
						if (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// Se usar innerHTML lançar uma exceção, use o método de fallback
				} pegar (e) {}
			}

			if (elem) {
				this.empty (). append (valor);
			}
		}, null, value, arguments.length);
	}

	replaceWith: function () {
		var ignorado = [];

		// Faça as alterações, substituindo cada elemento de contexto não ignorado pelo novo conteúdo
		retornar domManip (isso, argumentos, função (elem) {
			var pai = this.parentNode;

			if (jQuery.inArray (isto, ignorado) <0) {
				jQuery.cleanData (getAll (this));
				if (pai) {
					parent.replaceChild (elem, this);
				}
			}

		// Forçar a invocação de retorno de chamada
		}, ignorado);
	}
});

jQuery.each ({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "antes",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function (name, original) {
	jQuery.fn [name] = function (selector) {
		var elems,
			ret = [],
			insert = jQuery (seletor),
			last = insert.length - 1,
			i = 0;

		para (; i <= last; i ++) {
			elems = i === passado? isso: this.clone (true);
			jQuery (inserir [i]) [original] (elems);

			// Suporte: Android <= 4.0 apenas, somente PhantomJS 1
			// .get () porque push.apply (_, arraylike) é lançado no antigo WebKit
			push.apply (ret, elems.get ());
		}

		return this.pushStack (ret);
	};
});
var rnumnonpx = new RegExp ("^ (" + pnum + ") (! px) [az%] + $", "i");

var getStyles = function (elem) {

		// Suporte: IE <= 11 apenas, Firefox <= 30 (# 15098, # 14150)
		// IE joga em elementos criados em popups
		// FF enquanto isso joga em elementos de quadro através de "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (! view ||! view.opener) {
			vista = janela;
		}

		return view.getComputedStyle (elem);
	};

var rboxStyle = new RegExp (cssExpand.join ("|"), "i");



(function () {

	// A execução dos testes pixelPosition e boxSizingReliable requer apenas um layout
	// então eles são executados ao mesmo tempo para salvar o segundo cálculo.
	function computeStyleTests () {

		// Este é um singleton, precisamos executá-lo apenas uma vez
		if (! div) {
			Retorna;
		}

		container.style.cssText = "position: absolute; left: -11111px; largura: 60px;" +
			"margin-top: 1px; preenchimento: 0; limite: 0";
		div.style.cssText =
			"position: relative; display: bloco; box-sizing: border-box; estouro: rolagem;" +
			"margin: auto; border: 1px; preenchimento: 1px;" +
			"largura: 60%; topo: 1%";
		documentElement.appendChild (container) .appendChild (div);

		var divStyle = window.getComputedStyle (div);
		pixelPositionVal = divStyle.top! == "1%";

		// Suporte: Android 4.0 - apenas 4.3, Firefox <= 3 - 44
		reliableMarginLeftVal = roundPixelMeasures (divStyle.marginLeft) === 12;

		// Suporte: Android 4.0 - 4.3 apenas, Safari <= 9.1 - 10.1, iOS <= 7.0 - 9.3
		// Alguns estilos retornam com valores percentuais, mesmo que não devam
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures (divStyle.right) === 36;

		// Suporte: somente no IE 9 - 11
		// Detectar informações incorretas de dimensões de conteúdo para dimensionamento de caixa: elementos da caixa de borda
		boxSizingReliableVal = roundPixelMeasures (divStyle.width) === 36;

		// Suporte: apenas no IE 9
		// Detect overflow: scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absoluto";

		documentElement.removeChild (container);

		// Anula o div para que ele não seja armazenado na memória e
		// também será um sinal de que as verificações já realizadas
		div = null;
	}

	function roundPixelMeasures (measure) {
		return Math.round (parseFloat (medida));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement ("div"),
		div = document.createElement ("div");

	// Termine cedo em ambientes limitados (sem navegador)
	if (! div.style) {
		Retorna;
	}

	// Suporte: IE <= 9 - 11 apenas
	// O estilo do elemento clonado afeta o elemento de origem clonado (# 8908)
	div.style.background = "content-box";
	div.cloneNode (true) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend (suporte, {
		boxSizingReliable: function () {
			computeStyleTests ();
			retornar boxSizingReliableVal;
		}
		pixelBoxStyles: function () {
			computeStyleTests ();
			devolve pixelBoxStylesVal;
		}
		pixelPosition: function () {
			computeStyleTests ();
			return pixelPositionVal;
		}
		reliableMarginLeft: function () {
			computeStyleTests ();
			return reliableMarginLeftVal;
		}
		scrollboxSize: function () {
			computeStyleTests ();
			return scrollboxSizeVal;
		}
	});
}) ();


função curCSS (elem, name, computed) {
	largura var, minWidth, maxWidth, ret,

		// Suporte: Firefox 51+
		// Recuperando estilo antes de ser computado de alguma forma
		// corrige um problema ao obter valores errados
		// em elementos destacados
		style = elem.style;

	computed = computed || getStyles (elem);

	// getPropertyValue é necessário para:
	// .css ('filter') (apenas no IE 9, # 12537)
	// .css ('- customProperty) (# 3144)
	if (calculado) {
		ret = computed.getPropertyValue (name) || computado [nome];

		if (ret === "" &&! jQuery.contains (elem.ownerDocument, elem)) {
			ret = jQuery.style (elem, nome);
		}

		// Uma homenagem ao "incrível hack de Dean Edwards"
		// O Android Browser retorna porcentagem para alguns valores,
		// mas a largura parece ser confiável em pixels.
		// Isso é contra a especificação de rascunho do CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if (! support.pixelBoxStyles () && rnumnonpx.test (ret) && rboxStyle.test (nome)) {

			// Lembre-se dos valores originais
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Coloque os novos valores para obter um valor calculado
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Reverter os valores alterados
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret! == indefinido?

		// Suporte: IE <= 9 - 11 apenas
		// IE retorna o valor zIndex como um inteiro.
		ret + "":
		ret;
}


function addGetHookIf (conditionFn, hookFn) {

	// Defina o gancho, vamos verificar na primeira execução se é realmente necessário.
	Retorna {
		get: function () {
			if (condiçãoFn ()) {

				// Gancho não é necessário (ou não é possível usá-lo devido
				// para falta de dependência), remova-a.
				delete this.get;
				Retorna;
			}

			// Gancho necessário; redefina-o para que o teste de suporte não seja executado novamente.
			return (this.get = hookFn) .apply (isto, argumentos);
		}
	};
}


var

	// Swappable if display is none ou inicia com tabela
	// exceto "table", "table-cell" ou "table-caption"
	// Veja aqui os valores de exibição: https://developer.mozilla.org/pt-BR/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).++/,
	rcustomProp = / ^ - /,
	cssShow = {position: "absolute", visibilidade: "hidden", display: "block"},
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	}

	cssPrefixes = ["Webkit", "Moz", "ms"],
	emptyStyle = document.createElement ("div") .style;

// Retorna uma propriedade css mapeada para uma propriedade com prefixo de fornecedor potencial
função vendorPropName (name) {

	// Atalho para nomes que não são prefixados pelo fornecedor
	if (nome em emptyStyle) {
		nome de retorno;
	}

	// Verifique os nomes prefixados do fornecedor
	var capName = name [0] .toUpperCase () + name.slice (1),
		i = cssPrefixes.length;

	enquanto eu-- ) {
		name = cssPrefixes [i] + capName;
		if (nome em emptyStyle) {
			nome de retorno;
		}
	}
}

// Retorna uma propriedade mapeada ao longo do que jQuery.cssProps sugere ou
// uma propriedade prefixada de fornecedor.
function finalPropName (name) {
	var ret = jQuery.cssProps [nome];
	if (! ret) {
		ret = jQuery.cssProps [nome] = vendorPropName (nome) || nome;
	}
	retorno ret;
}

function setPositiveNumber (elem, value, subtract) {

	// Quaisquer valores relativos (+/-) já foram
	// normalizado neste momento
	var matches = rcssNum.exec (valor);
	retornar correspondências?

		// Protege contra "subtrair" indefinido, por exemplo, quando usado como em cssHooks
		Math.max (0, matches [2] - (subtrair || 0)) + (corresponde a [3] || "px"):
		valor;
}

function boxModelAdjustment (elem, dimensão, box, isBorderBox, styles, computedVal) {
	var i = dimensão === "largura"? 1: 0,
		extra = 0,
		delta = 0;

	// O ajuste pode não ser necessário
	if (box === (isBorderBox? "border": "content")) {
		return 0;
	}

	para (; i <4; i + = 2) {

		// Ambos os modelos de caixa excluem margem
		if (box === "margin") {
			delta + = jQuery.css (elem, box + cssExpand [i], true, estilos);
		}

		// Se chegarmos aqui com uma caixa de conteúdo, estamos buscando "preenchimento" ou "borda" ou "margem"
		if (! isBorderBox) {

			// Adicionar preenchimento
			delta + = jQuery.css (elem, "preenchimento" + cssExpand [i], true, estilos);

			// Para "border" ou "margin", adicione border
			if (box! == "preenchimento") {
				delta + = jQuery.css (elem, "border" + cssExpand [i] + "Largura", true, estilos);

			// Mas ainda manter o controle do contrário
			} outro {
				extra + = jQuery.css (elem, "border" + cssExpand [i] + "Largura", true, estilos);
			}

		// Se chegarmos aqui com uma caixa de borda (conteúdo + preenchimento + borda), estamos buscando "conteúdo" ou
		// "preenchimento" ou "margem"
		} outro {

			// Para "content", subtraia o preenchimento
			if (box === "content") {
				delta - = jQuery.css (elem, "padding" + cssExpand [i], true, estilos);
			}

			// Para "conteúdo" ou "preenchimento", subtraia a borda
			if (box! == "margin") {
				delta - = jQuery.css (elem, "border" + cssExpand [i] + "Largura", true, estilos);
			}
		}
	}

	// Conta para sarjeta de rolagem de caixa de conteúdo positiva quando solicitada pelo fornecimento de computedVal
	if (! isBorderBox && computedVal> = 0) {

		// offsetWidth / offsetHeight é uma soma arredondada de conteúdo, preenchimento, canaleta de rolagem e borda
		// Assumindo uma calha de rolagem de inteiro, subtraia o resto e arredonde
		delta + = Math.max (0, Math.ceil (
			elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)] -
			computedVal - computedVal -
			delta -
			extra -
			0,5
		));
	}

	delta de retorno;
}

function getWidthOrHeight (elem, dimensão, extra) {

	// Comece com estilo computado
	var styles = getStyles (elem),
		val = curCSS (elem, dimension, styles),
		isBorderBox = jQuery.css (elem, "boxSizing", false, estilos) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Suporte: Firefox <= 54
	// Retorna um valor não-pixel confuso ou finge ignorância, conforme apropriado.
	if (rnumnonpx.test (val)) {
		if (! extra) {
			return val;
		}
		val = "auto";
	}

	// Verifique o estilo no caso de um navegador que retorna valores não confiáveis
	// para getComputedStyle silenciosamente volta para o estilo elem.confiável
	valueIsBorderBox = valueIsBorderBox &&
		(support.boxSizingReliable () || val === elem.style [dimensão]);

	// Retorna para offsetWidth / offsetHeight quando o valor é "auto"
	// Isso acontece para elementos inline sem configuração explícita (gh-3571)
	// Suporte: Android <= 4,1 - 4,3 apenas
	// Também use offsetWidth / offsetHeight para dimensões in-line incorretas (gh-3602)
	if (val === "auto" ||
		! parseFloat (val) && jQuery.css (elem, "display", false, estilos) === "inline") {

		val = elem ["offset" + dimensão [0] .toUpperCase () + dimension.slice (1)];

		// offsetWidth / offsetHeight fornece valores de caixa de borda
		valueIsBorderBox = true;
	}

	// Normalize "" e auto
	val = parseFloat (val) || 0;

	// Ajustar para o modelo de caixa do elemento
	retorno (val +
		boxModelAdjustment (
			elem
			dimensão,
			extra || (isBorderBox? "border": "content"),
			valueIsBorderBox,
			estilos,

			// Fornece o tamanho computado atual para solicitar o cálculo da calha de rolagem (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend ({

	// Adiciona ganchos de propriedades de estilo para substituir o padrão
	// comportamento de obter e definir uma propriedade de estilo
	cssHooks: {
		opacidade: {
			get: function (elem, computed) {
				if (calculado) {

					// Devemos sempre obter um número de volta da opacidade
					var ret = curCSS (elem, "opacidade");
					Retornar === ""? "1": ret;
				}
			}
		}
	}

	// Não adicione automaticamente "px" a essas propriedades possivelmente sem unidade
	cssNumber: {
		"animationIterationCount": true
		"columnCount": true
		"fillOpacity": true
		"flexGrow": verdade,
		"flexShrink": verdade,
		"fontWeight": true
		"lineHeight": true
		"opacidade": verdade
		"pedido": verdadeiro
		"órfãos": verdade
		"viúvas": verdade
		"zIndex": verdadeiro
		"zoom": true
	}

	// Adicionar propriedades cujos nomes você deseja corrigir antes
	// definindo ou obtendo o valor
	cssProps: {},

	// Obter e definir a propriedade de estilo em um nó DOM
	style: function (elem, nome, valor, extra) {

		// Não defina estilos em nós de texto e comentários
		if (! elem || elem.nodeType === 3 || elem.nodeType === 8 ||! elem.style) {
			Retorna;
		}

		// Certifique-se de que estamos trabalhando com o nome certo
		var ret, tipo, ganchos,
			origName = camelCase (nome),
			isCustomProp = rcustomProp.test (nome),
			style = elem.style;

		// Certifique-se de que estamos trabalhando com o nome certo. Nós não
		// quer consultar o valor se for uma propriedade customizada de CSS
		// desde que eles são definidos pelo usuário.
		if (! isCustomProp) {
			name = finalPropName (origName);
		}

		// Obtém o gancho para a versão prefixada, depois a versão não definida
		ganchos = jQuery.cssHooks [nome] || jQuery.cssHooks [origName];

		// Verifique se estamos definindo um valor
		if (valor! == indefinido) {
			tipo = tipo de valor;

			// Converta "+ =" ou "- =" em números relativos (# 7345)
			if (tipo === "string" && (ret = rcssNum.exec (valor)) && ret [1]) {
				valor = adjustCSS (elem, nome, ret);

				// Correção do bug # 9237
				type = "number";
			}

			// Verifique se os valores nulo e NaN não estão definidos (# 7116)
			if (valor == null || valor! == valor) {
				Retorna;
			}

			// Se um número foi passado, adicione a unidade (exceto para certas propriedades CSS)
			if (tipo === "numero") {
				valor + = ret && ret [3] || (jQuery.cssNumber [origName]? "": "px");
			}

			// background- * props afetam os valores do clone original
			if (! support.clearCloneStyle && value === "" && name.indexOf ("fundo") === 0) {
				style [name] = "herdar";
			}

			// Se um gancho foi fornecido, use esse valor, caso contrário, apenas configure o valor especificado
			if (! hooks ||! ("set" em ganchos) ||
				(valor = hooks.set (elem, valor, extra))! == undefined) {

				if (isCustomProp) {
					style.setProperty (nome, valor);
				} outro {
					estilo [nome] = valor;
				}
			}

		} outro {

			// Se um gancho foi fornecido, obtenha o valor não computado de lá
			if (hooks && "get" em ganchos &&
				(ret = hooks.get (elem, false, extra))! == undefined) {

				retorno ret;
			}

			// Caso contrário, é só pegar o valor do objeto de estilo
			return style [nome];
		}
	}

	css: function (elem, name, extra, styles) {
		var val, num, ganchos,
			origName = camelCase (nome),
			isCustomProp = rcustomProp.test (nome);

		// Certifique-se de que estamos trabalhando com o nome certo. Nós não
		// deseja modificar o valor se for uma propriedade customizada de CSS
		// desde que eles são definidos pelo usuário.
		if (! isCustomProp) {
			name = finalPropName (origName);
		}

		// Tente o nome prefixado seguido pelo nome não-criado
		ganchos = jQuery.cssHooks [nome] || jQuery.cssHooks [origName];

		// Se um gancho foi fornecido, obtenha o valor computado de lá
		if (hooks && "get" em ganchos) {
			val = hooks.get (elem, true, extra);
		}

		// Caso contrário, se existir uma maneira de obter o valor computado, use
		if (val === indefinido) {
			val = curCSS (elem, nome, estilos);
		}

		// Converter "normal" em valor calculado
		if (val === "normal" && nome em cssNormalTransform) {
			val = cssNormalTransform [nome];
		}

		// Torna numérico se forçado ou um qualificador foi fornecido e val parece numérico
		if (extra === "" || extra) {
			num = parseFloat (val);
			return extra === true || isFinite (num)? num || 0: val;
		}

		return val;
	}
});

jQuery.each (["height", "width"], função (i, dimensão) {
	jQuery.cssHooks [dimension] = {
		get: function (elem, computed, extra) {
			if (calculado) {

				// Certos elementos podem ter informações de dimensão se os mostrarmos invisivelmente
				// mas deve ter um estilo de exibição atual que beneficiaria
				return rdisplayswap.test (jQuery.css (elem, "display")) &&

					// Suporte: Safari 8+
					// As colunas da tabela no Safari têm offsetWidth diferente de zero e zero
					// getBoundingClientRect (). width a menos que a exibição seja alterada.
					// Suporte: IE <= 11 apenas
					// Executando getBoundingClientRect em um nó desconectado
					// no IE lança um erro.
					(! elem.getClientRects (). length ||! elem.getBoundingClientRect (). width)?
						swap (elem, cssShow, function () {
							return getWidthOrHeight (elem, dimensão, extra);
						}):
						getWidthOrHeight (elem, dimensão, extra);
			}
		}

		set: function (elem, valor, extra) {
			var combinações
				styles = getStyles (elem),
				isBorderBox = jQuery.css (elem, "boxSizing", false, estilos) === "border-box",
				subtrair = extra && boxModelAdjustment (
					elem
					dimensão,
					extra,
					isBorderBox,
					Estilos
				);

			// Conta para dimensões não-confiáveis ​​da caixa de bordas comparando offset * a computado e
			// falsificando uma caixa de conteúdo para obter borda e preenchimento (gh-3699)
			if (isBorderBox && support.scrollboxSize () === styles.position) {
				subtrair - = Math.ceil (
					elem ["offset" + dimension [0] .toUpperCase () + dimension.slice (1)] -
					parseFloat (estilos [dimensão]) -
					boxModelAdjustment (elem, dimension, "border", false, styles) -
					0,5
				);
			}

			// Converter em pixels se for necessário ajuste de valor
			if (subtrair && (matches = rcssNum.exec (valor)) &&
				(corresponde a [3] || "px")! == "px") {

				elem.style [dimension] = value;
				value = jQuery.css (elem, dimensão);
			}

			return setPositiveNumber (elem, valor, subtrair);
		}
	};
});

jQuery.cssHooks.marginLeft = addGetHookIf (support.reliableMarginLeft,
	function (elem, computed) {
		if (calculado) {
			return (parseFloat (curCSS (elem, "marginLeft")) ||
				elem.getBoundingClientRect (). left -
					swap (elem, {marginLeft: 0}, function () {
						return elem.getBoundingClientRect (). left;
					})
				) + "px";
		}
	}
);

// Esses ganchos são usados ​​pelo animate para expandir propriedades
jQuery.each ({
	margem: "",
	preenchimento: "",
	borda: "Largura"
}, function (prefixo, sufixo) {
	jQuery.cssHooks [prefixo + sufixo] = {
		expand: function (value) {
			var i = 0,
				expandido = {}

				// Assume um único número, se não uma string
				parts = typeof value === "string"? value.split (""): [valor];

			para (; i <4; i ++) {
				expandido [prefixo + cssExpand [i] + sufixo] =
					partes [i] || partes [i - 2] || partes [0];
			}

			retorno expandido;
		}
	};

	if (prefixo! == "margem") {
		jQuery.cssHooks [prefixo + sufixo] .set = setPositiveNumber;
	}
});

jQuery.fn.extend ({
	css: function (name, value) {
		retorno de acesso (isso, função (elem, nome, valor) {
			var estilos, len,
				map = {},
				i = 0;

			if (Array.isArray (name)) {
				styles = getStyles (elem);
				len = name.length;

				para (; i <len; i ++) {
					map [nome [i]] = jQuery.css (elem, nome [i], falso, estilos);
				}

				mapa de retorno;
			}

			valor de retorno! == indefinido?
				jQuery.style (elem, name, value):
				jQuery.css (elem, nome);
		}, nome, valor, argumentos.length> 1);
	}
});


função Tween (elem, opções, prop, end, easing) {
	retornar o novo Tween.prototype.init (elem, options, prop, end, easing);
}
jQuery.Tween = Tween;

Tween.prototype = {
	construtor: Tween,
	init: function (elem, opções, prop, end, easing, unit) {
		this.elem = elem;
		isto.prop = prop;
		this.easing = facilitando || jQuery.easing._default;
		this.options = opções;
		this.start = this.now = this.cur ();
		this.end = end;
		this.unit = unit || (jQuery.cssNumber [prop]? "": "px");
	}
	cur: function () {
		ganchos var = Tween.propHooks [this.prop];

		return hooks && hooks.get?
			hooks.get (this):
			Tween.propHooks._default.get (this);
	}
	run: function (percent) {
		var aliviado,
			ganchos = Tween.propHooks [this.prop];

		if (this.options.duration) {
			this.pos = eased = jQuery.easing [esta.esse] (
				por cento, this.options.duration * por cento, 0, 1, this.options.duration
			);
		} outro {
			this.pos = eased = porcentagem;
		}
		this.now = (this.end - this.start) * facilitado + this.start;

		if (this.options.step) {
			this.options.step.call (this.elem, this.now, this);
		}

		if (hooks && hooks.set) {
			hooks.set (this);
		} outro {
			Tween.propHooks._default.set (this);
		}
		devolva isto;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_padrão: {
		get: function (tween) {
			var resultado;

			// Use uma propriedade no elemento diretamente quando não for um elemento DOM
			// ou quando não há nenhuma propriedade de estilo correspondente que exista.
			if (tween.elem.nodeType! == 1 ||
				tween.elem [tween.prop]! = null & tween.elem.style [tween.prop] == null) {
				return tween.elem [tween.prop];
			}

			// Passar uma string vazia como um 3º parâmetro para .css automaticamente
			// tenta um parseFloat e fallback para uma string se a análise falhar.
			// Valores simples como "10px" são analisados ​​para Float;
			// valores complexos como "rotate (1rad)" são retornados como estão.
			result = jQuery.css (tween.elem, tween.prop, "");

			// Cadeias vazias, nulas, indefinidas e "auto" são convertidas para 0.
			retorno! resultado || resultado === "auto"? 0: resultado;
		}
		set: function (tween) {

			// Use o gancho de passo para o back compat.
			// Use o cssHook se estiver lá.
			// Use .style, se disponível, e use propriedades simples, quando disponíveis.
			if (jQuery.fx.step [tween.prop]) {
				jQuery.fx.step [tween.prop] (tween);
			} else if (tween.elem.nodeType === 1 &&
				(tween.elem.style [jQuery.cssProps [tween.prop]]! = null ||
					jQuery.cssHooks [tween.prop])) {
				jQuery.style (tween.elem, tween.prop, tween.now + tween.unit);
			} outro {
				tween.elem [tween.prop] = tween.now;
			}
		}
	}
};

// Suporte: IE <= 9 apenas
// Abordagem baseada em pânico para configurar coisas em nós desconectados
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function (tween) {
		if (tween.elem.nodeType && tween.elem.parentNode) {
			tween.elem [tween.prop] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function (p) {
		return p;
	}
	swing: function (p) {
		return 0.5 - Math.cos (p * Math.PI) / 2;
	}
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Voltar compat <1.8 ponto de extensão
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = / ^ (?: alternar | mostrar | ocultar) $ /,
	rrun = / queueHooks $ /;

função schedule () {
	if (inProgress) {
		if (document.hidden === false && window.requestAnimationFrame) {
			window.requestAnimationFrame (agenda);
		} outro {
			window.setTimeout (schedule, jQuery.fx.interval);
		}

		jQuery.fx.tick ();
	}
}

// Animações criadas em sincronia serão executadas de forma síncrona
function createFxNow () {
	window.setTimeout (function () {
		fxNow = indefinido;
	});
	return (fxNow = Date.now ());
}

// Gerar parâmetros para criar uma animação padrão
função genFx (tipo, includeWidth) {
	var que,
		i = 0,
		attrs = {altura: tipo};

	// Se incluirmos largura, o valor do passo é 1 para todos os valores de cssExpand,
	// caso contrário, o valor do passo é 2 para saltar para a esquerda e para a direita
	includeWidth = includeWidth? 1: 0;
	para (; i <4; i + = 2 - includeWidth) {
		qual = cssExpand [i];
		attrs ["margin" + which] = attrs ["preenchimento" + qual] = tipo;
	}

	if (includeWidth) {
		attrs.opacity = attrs.width = tipo;
	}

	return attrs;
}

function createTween (valor, prop, animação) {
	var tween,
		collection = (Animation.tweeners [prop] || []) .concat (Animation.tweeners ["*"]),
		índice = 0,
		length = collection.length;
	para (; index <length; index ++) {
		if ((tween = coleção [index] .call (animação, prop, valor))) {

			// Acabamos com essa propriedade
			retorno interpolação;
		}
	}
}

função defaultPrefilter (elem, props, opts) {
	var prop, value, toggle, ganchos, oldfire, propTween, restoreDisplay, display,
		isBox = "largura" em adereços || "altura" em adereços
		anim = isso,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree (elem),
		dataShow = dataPriv.get (elem, "fxshow");

	// Animações que saltam a fila sequestram os ganchos fx
	if (! opts.queue) {
		ganchos = jQuery._queueHooks (elem, "fx");
		if (hooks.unqueued == null) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function () {
				if (! hooks.unqueued) {
					oldfire ();
				}
			};
		}
		hooks.unqueued ++;

		anim.always (function () {

			// Assegure-se de que o manipulador completo seja chamado antes que isso seja concluído
			anim.always (function () {
				hooks.unqueued--;
				if (! jQuery.queue (elem, "fx") .comprimento) {
					hooks.empty.fire ();
				}
			});
		});
	}

	// Detectar mostrar / ocultar animações
	para (prop em adereços) {
		valor = adereços [prop];
		if (rfxtypes.test (value)) {
			delete props [prop];
			toggle = toggle || valor === "toggle";
			if (valor === (oculto? "esconder": "mostrar")) {

				// Finja ser escondido se for um "show" e
				// ainda há dados de um show parado / hide
				if (valor === "mostrar" && dataShow && dataShow [prop]! == undefined) {
					oculto = verdadeiro;

				// Ignora todos os outros dados de mostrar / ocultar não operados
				} outro {
					continuar;
				}
			}
			orig [prop] = dataShow && dataShow [prop] || jQuery.style (elem, prop);
		}
	}

	// Bail out se este for um no-op como .hide (). Hide ()
	propTween =! jQuery.isEmptyObject (props);
	if (! propTween && jQuery.isEmptyObject (orig)) {
		Retorna;
	}

	// Restringir estilos de "estouro" e "exibição" durante animações de caixa
	if (isBox && elem.nodeType === 1) {

		// Suporte: IE <= 9 - 11, Edge 12 - 15
		// Registra todos os 3 atributos de estouro porque o IE não infere a taquigrafia
		// de overflowX e overflowY de valor idêntico e Edge apenas espelha
		// o valor overflowX aí.
		opts.overflow = [style.overflow, style.overflowX, style.overflowY];

		// Identifica um tipo de exibição, preferindo mostrar / ocultar dados antigos sobre a cascata CSS
		restoreDisplay = dataShow && dataShow.display;
		if (restoreDisplay == null) {
			restoreDisplay = dataPriv.get (elem, "display");
		}
		display = jQuery.css (elem, "display");
		if (exibir === "nenhum") {
			if (restoreDisplay) {
				display = restoreDisplay;
			} outro {

				// Obtém o (s) valor (es) não vazio (s), forçando temporariamente a visibilidade
				showHide ([elem], true);
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css (elem, "display");
				showHide ([elem]);
			}
		}

		// Animar elementos inline como inline-block
		if (exibição === "inline" || display === "inline-block" && restoreDisplay! = null) {
			if (jQuery.css (elem, "float") === "nenhum") {

				// Restaurar o valor de exibição original no final de animações de exibição / ocultação puras
				if (! propTween) {
					anim.done (function () {
						style.display = restoreDisplay;
					});
					if (restoreDisplay == null) {
						display = style.display;
						restoreDisplay = exibir === "nenhum"? "" : exibição;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if (opts.overflow) {
		style.overflow = "hidden";
		anim.always (function () {
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		});
	}

	// Implementar mostrar / ocultar animações
	propTween = false;
	para (prop in orig) {

		// Geral mostra / oculta a configuração para este elemento de animação
		if (! propTween) {
			if (dataShow) {
				if ("hidden" no dataShow) {
					hidden = dataShow.hidden;
				}
			} outro {
				dataShow = dataPriv.access (elem, "fxshow", {display: restoreDisplay});
			}

			// Armazena escondido / visível para alternar, assim `.stop (). Toggle ()` "inverte"
			if (toggle) {
				dataShow.hidden =! oculto;
			}

			// Mostra elementos antes de anima-los
			if (hidden) {
				showHide ([elem], true);
			}

			/ * eslint-disable no-loop-func * /

			anim.done (function () {

			/ * eslint-enable no-loop-func * /

				// O passo final de uma animação "ocultar" está escondendo o elemento
				if (! hidden) {
					showHide ([elem]);
				}
				dataPriv.remove (elem, "fxshow");
				para (prop in orig) {
					jQuery.style (elem, prop, orig [prop]);
				}
			});
		}

		// Configuração por propriedade
		propTween = createTween (oculto? dataShow [prop]: 0, prop, anim);
		if (! (prop em dataShow)) {
			dataShow [prop] = propTween.start;
			if (hidden) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter (adereços, specialEasing) {
	var índice, nome, atenuação, valor, ganchos;

	// camelCase, specialEasing e expand cssHook pass
	para (index in props) {
		nome = camelCase (índice);
		easing = specialEasing [nome];
		valor = adereços [índice];
		if (Array.isArray (value)) {
			easing = valor [1];
			valor = props [index] = valor [0];
		}

		if (index! == name) {
			adereços [nome] = valor;
			delete props [index];
		}

		ganchos = jQuery.cssHooks [nome];
		if (hooks && "expand" em ganchos) {
			valor = hooks.expand (valor);
			delete props [nome];

			// Não é bem $ .extend, isso não sobrescreverá as chaves existentes.
			// Reutilizando 'index' porque temos o "nome" correto
			para (index in value) {
				if (! (index in props)) {
					adereços [index] = valor [index];
					specialEasing [index] = facilitando;
				}
			}
		} outro {
			specialEasing [name] = easing;
		}
	}
}

animação de função (elem, propriedades, opções) {
	var resultado,
		parado,
		índice = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred (). always (function () {

			// Não combina elem no: seletor animado
			delete tick.elem;
		}),
		tick = function () {
			if (parado) {
				retorna falso;
			}
			var currentTime = fxNow || createFxNow (),
				restante = Math.max (0, animation.startTime + animation.duration - currentTime),

				// Suporte: apenas Android 2.3
				// Bug de travamento arcaico não nos permitirá usar `1 - (0.5 || 0)` (# 12497)
				temp = restantes / animação.duração || 0,
				por cento = 1 - temp
				índice = 0,
				comprimento = animação.tweens.length;

			para (; index <length; index ++) {
				animation.tweens [index] .run (por cento);
			}

			deferred.notifyWith (elem, [animação, porcentagem, restante]);

			// Se há mais a fazer, rendimento
			if (por cento <1 && comprimento) {
				retorno restante;
			}

			// Se esta foi uma animação vazia, sintetize uma notificação final de progresso
			if (! comprimento) {
				deferred.notifyWith (elem, [animação, 1, 0]);
			}

			// Resolva a animação e relate sua conclusão
			deferred.resolveWith (elem, [animação]);
			retorna falso;
		}
		animação = deferred.promise ({
			elem: elem,
			adereços: jQuery.extend ({}, propriedades),
			opts: jQuery.extend (true, {
				specialEasing: {},
				facilitando: jQuery.easing._default
			}, opções),
			originalProperties: propriedades,
			originalOptions: opções,
			startTime: fxNow || createFxNow (),
			duração: options.duration,
			tweens: [],
			createTween: function (prop, end) {
				var tween = jQuery.Tween (elem, animation.opts, prop, final,
						animation.opts.specialEasing [prop] || animation.opts.easing);
				animation.tweens.push (tween);
				retorno interpolação;
			}
			stop: function (gotoEnd) {
				var index = 0,

					// Se estamos indo para o final, queremos executar todas as interpolações
					// senão pulamos esta parte
					length = gotoEnd? animation.tweens.length: 0;
				if (parado) {
					devolva isto;
				}
				parado = verdadeiro;
				para (; index <length; index ++) {
					animation.tweens [index] .run (1);
				}

				// Resolva quando jogamos o último quadro; caso contrário, rejeite
				if (gotoEnd) {
					deferred.notifyWith (elem, [animação, 1, 0]);
					deferred.resolveWith (elem, [animação, gotoEnd]);
				} outro {
					deferred.rejectWith (elem, [animação, gotoEnd]);
				}
				devolva isto;
			}
		}),
		props = animation.props;

	propFilter (props, animation.opts.specialEasing);

	para (; index <length; index ++) {
		result = Animation.prefilters [index] .call (animação, elem, adereços, animação.opts);
		if (resultado) {
			if (isFunction (result.stop)) {
				jQuery._queueHooks (animation.elem, animation.opts.queue) .stop =
					result.stop.bind (result);
			}
			resultado de retorno;
		}
	}

	jQuery.map (props, createTween, animação);

	if (isFunction (animation.opts.start)) {
		animation.opts.start.call (elem, animação);
	}

	// Anexar retornos de chamada de opções
	animação
		.progress (animation.opts.progress)
		.done (animation.opts.done, animation.opts.complete)
		.fail (animation.opts.fail)
		.always (animation.opts.always);

	jQuery.fx.timer (
		jQuery.extend (tick, {
			elem: elem,
			anim: animação,
			fila: animation.opts.queue
		})
	);

	devolver animação;
}

jQuery.Animation = jQuery.extend (animação, {

	tweeners: {
		"*": [function (prop, value) {
			var tween = this.createTween (prop, valor);
			adjustCSS (tween.elem, prop, rcssNum.exec (valor), tween);
			retorno interpolação;
		}]
	}

	tweener: function (props, callback) {
		if (isFunction (props)) {
			retorno de chamada = adereços;
			props = ["*"];
		} outro {
			props = props.match (rnothtmlwhite);
		}

		var prop,
			índice = 0,
			comprimento = props.length;

		para (; index <length; index ++) {
			prop = props [index];
			Animation.tweeners [prop] = Animation.tweeners [prop] || [];
			Animation.tweeners [prop] .unshift (retorno de chamada);
		}
	}

	pré-filtros: [defaultPrefilter],

	prefilter: function (callback, prepend) {
		if (prefixado) {
			Animation.prefilters.unshift (retorno de chamada);
		} outro {
			Animation.prefilters.push (callback);
		}
	}
});

jQuery.speed = função (velocidade, facilitação, fn) {
	var opt = speed && typeof speed === "objeto"? jQuery.extend ({}, velocidade): {
		complete: fn || ! fn && easing ||
			isFunction (speed) && speed,
		duração: velocidade,
		facilitando: fn && easing || facilitando &&! isFunction (easing) && easing
	};

	// Ir para o estado final se fx estiver desligado
	if (jQuery.fx.off) {
		opt.duration = 0;

	} outro {
		if (tipo de opt.duration! == "number") {
			if (opt.duration em jQuery.fx.speeds) {
				opt.duration = jQuery.fx.speeds [opt.duration];

			} outro {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true / undefined / null -> "fx"
	if (opt.queue == null || opt.queue === true) {
		opt.queue = "fx";
	}

	// enfileiramento
	opt.old = opt.complete;

	opt.complete = function () {
		if (isFunction (opt.old)) {
			opt.old.call (isso);
		}

		if (opt.queue) {
			jQuery.dequeue (isso, opt.queue);
		}
	};

	return opt;
};

jQuery.fn.extend ({
	fadeTo: function (speed, to, easing, callback) {

		// Mostra todos os elementos ocultos depois de definir a opacidade para 0
		retornar this.filter (isHiddenWithinTree) .css ("opacidade", 0) .show ()

			// Animar para o valor especificado
			.end (). animate ({opacidade: para}, velocidade, atenuação, retorno de chamada);
	}
	animar: function (prop, speed, easing, callback) {
		var empty = jQuery.isEmptyObject (prop),
			optall = jQuery.speed (velocidade, atenuação, retorno de chamada)
			doAnimation = function () {

				// Operar em uma cópia do prop, para que o alívio por propriedade não seja perdido
				var anim = Animação (isto, jQuery.extend ({}, prop), optall);

				// Esvazie animações ou o acabamento resolve imediatamente
				if (vazio || dataPriv.get (this, "finish")) {
					anim.stop (true);
				}
			};
			doAnimation.finish = doAnimation;

		retornar vazio || optall.queue === false?
			this.each (doAnimation):
			this.queue (optall.queue, doAnimation);
	}
	stop: function (tipo, clearQueue, gotoEnd) {
		var stopQueue = function (hooks) {
			var stop = hooks.stop;
			delete hooks.stop;
			parar (gotoEnd);
		};

		if (typeof type! == "string") {
			gotoEnd = clearQueue;
			clearQueue = tipo;
			type = indefinido;
		}
		if (clearQueue && type! == false) {
			this.queue (digite || "fx", []);
		}

		return this.each (function () {
			var dequeue = true
				index = type! = null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get (this);

			if (index) {
				if (data [index] && data [index] .stop) {
					stopQueue (dados [index]);
				}
			} outro {
				para (índice nos dados) {
					if (dados [index] && data [index] .stop && rrun.test (index)) {
						stopQueue (dados [index]);
					}
				}
			}

			para (index = timers.length; index--;) {
				if (timers [index] .elem === isto &&
					(tipo == null || timers [index] .queue === tipo)) {

					timers [index] .anim.stop (gotoEnd);
					dequeue = false;
					timers.splice (índice, 1);
				}
			}

			// Inicia o próximo na fila se o último passo não for forçado.
			// Timers atualmente chamarão seus callbacks completos, que
			// será dequeue mas somente se eles foram gotoEnd.
			if (desenfileire ||! gotoEnd) {
				jQuery.dequeue (isso, tipo);
			}
		});
	}
	finish: function (type) {
		if (tipo! == falso) {
			type = type || "fx";
		}
		return this.each (function () {
			var index,
				data = dataPriv.get (this),
				queue = data [type + "queue"],
				hooks = data [type + "queueHooks"],
				timers = jQuery.timers,
				comprimento = fila? queue.length: 0;

			// Ativar sinalizador de acabamento em dados privados
			data.finish = true;

			// Esvazie a fila primeiro
			jQuery.queue (isto, tipo, []);

			if (hooks && hooks.stop) {
				hooks.stop.call (isso, verdadeiro);
			}

			// Procure por animações ativas e termine-as
			para (index = timers.length; index--;) {
				if (timers [index] .elem === this && timers [index] .queue === tipo) {
					timers [index] .anim.stop (true);
					timers.splice (índice, 1);
				}
			}

			// Procure por animações na fila antiga e termine-as
			para (índice = 0; índice <comprimento; índice ++) {
				if (fila [index] && fila [index] .finish) {
					fila [index] .finish.call (isso);
				}
			}

			// Desativar a bandeira de finalização
			delete data.finish;
		});
	}
});

jQuery.each (["toggle", "show", "hide"], função (i, nome) {
	var cssFn = jQuery.fn [nome];
	jQuery.fn [name] = function (velocidade, atenuação, retorno de chamada) {
		velocidade de retorno == null || typeof speed === "booleano"?
			cssFn.apply (isto, argumentos):
			this.animate (genFx (nome, true), velocidade, easing, callback);
	};
});

// Gerar atalhos para animações personalizadas
jQuery.each ({
	slideDown: genFx ("show"),
	slideUp: genFx ("ocultar"),
	slideToggle: genFx ("toggle"),
	fadeIn: {opacidade: "mostrar"},
	fadeOut: {opacidade: "ocultar"},
	fadeToggle: {opacidade: "alternar"}
}, function (name, props) {
	jQuery.fn [name] = function (velocidade, atenuação, retorno de chamada) {
		return this.animate (adereços, velocidade, facilitação, callback);
	};
});

jQuery.timers = [];
jQuery.fx.tick = function () {
	var timer
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now ();

	para (; i <timers.length; i ++) {
		timer = timers [i];

		// Execute o temporizador e remova-o com segurança quando terminar (permitindo a remoção externa)
		if (! timer () && timers [i] === timer) {
			timers.splice (i--, 1);
		}
	}

	if (! timers.length) {
		jQuery.fx.stop ();
	}
	fxNow = indefinido;
};

jQuery.fx.timer = function (timer) {
	jQuery.timers.push (temporizador);
	jQuery.fx.start ();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function () {
	if (inProgress) {
		Retorna;
	}

	inProgress = true;
	cronograma();
};

jQuery.fx.stop = function () {
	inProgress = null;
};

jQuery.fx.speeds = {
	lento: 600,
	rápido: 200,

	// Velocidade padrão
	_default: 400
};


// Baseado no plugin do Clint Helfers, com permissão.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function (time, type) {
	time = jQuery.fx? jQuery.fx.speeds [time] || tempo: tempo;
	type = type || "fx";

	return this.queue (tipo, função (próximo, ganchos) {
		var timeout = window.setTimeout (próxima, hora);
		hooks.stop = function () {
			window.clearTimeout (tempo limite);
		};
	});
};


(function () {
	var input = document.createElement ("input"),
		select = document.createElement ("select"),
		opt = select.appendChild (document.createElement ("option"));

	input.type = "checkbox";

	// Suporte: Android <= 4,3 apenas
	// O valor padrão de uma caixa de seleção deve estar "on"
	support.checkOn = input.value! == "";

	// Suporte: IE <= 11 apenas
	// Deve acessar o selectedIndex para tornar as opções padrão selecionadas
	support.optSelected = opt.selected;

	// Suporte: IE <= 11 apenas
	// Uma entrada perde seu valor depois de se tornar um rádio
	input = document.createElement ("input");
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
}) ();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend ({
	attr: function (nome, valor) {
		retorno de acesso (isso, jQuery.attr, nome, valor, argumentos.length> 1);
	}

	removeAttr: function (name) {
		return this.each (function () {
			jQuery.removeAttr (isto, nome);
		});
	}
});

jQuery.extend ({
	attr: function (elem, nome, valor) {
		var ret, ganchos,
			nType = elem.nodeType;

		// Não obter / definir atributos em nós de texto, comentário e atributo
		if (nType === 3 || nType === 8 || nType === 2) {
			Retorna;
		}

		// Retorna para prop quando os atributos não são suportados
		if (tipo de elem.getAttribute === "undefined") {
			return jQuery.prop (elem, nome, valor);
		}

		// Ganchos de atributos são determinados pela versão em minúsculas
		// Pega o gancho necessário se um estiver definido
		if (nType! == 1 ||! jQuery.isXMLDoc (elem)) {
			hooks = jQuery.attrHooks [name.toLowerCase ()] ||
				(jQuery.expr.match.bool.test (name)? boolHook: indefinido);
		}

		if (valor! == indefinido) {
			if (valor === null) {
				jQuery.removeAttr (elem, nome);
				Retorna;
			}

			if (hooks && "set" em ganchos &&
				(ret = hooks.set (elem, value, name))! == indefinido) {
				retorno ret;
			}

			elem.setAttribute (nome, valor + "");
			valor de retorno;
		}

		if (hooks && "get" em hooks && (ret = hooks.get (elem, name))! == null) {
			retorno ret;
		}

		ret = jQuery.find.attr (elem, nome);

		// Atributos inexistentes retornam null, nos normalizamos para undefined
		Retornar == null? indefinido: ret;
	}

	attrHooks: {
		tipo: {
			set: function (elem, value) {
				if (! support.radioValue && value === "radio" &&
					nodeName (elem, "input")) {
					var val = elem.value;
					elem.setAttribute ("tipo", valor);
					if (val) {
						elem.value = val;
					}
					valor de retorno;
				}
			}
		}
	}

	removeAttr: function (elem, value) {
		nome var,
			i = 0,

			// Os nomes de atributos podem conter caracteres de espaços em branco que não sejam HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = valor && value.match (rnothtmlwhite);

		if (attrNames && elem.nodeType === 1) {
			while ((name = attrNames [i ++]))) {
				elem.removeAttribute (nome);
			}
		}
	}
});

// Ganchos para atributos booleanos
boolHook = {
	set: function (elem, value, name) {
		if (valor === falso) {

			// Remove atributos booleanos quando definido como falso
			jQuery.removeAttr (elem, nome);
		} outro {
			elem.setAttribute (nome, nome);
		}
		nome de retorno;
	}
};

jQuery.each (jQuery.expr.match.bool.source.match (/ \ w + / g), função (i, nome) {
	var getter = attrHandle [nome] || jQuery.find.attr;

	attrHandle [name] = function (elem, nome, isXML) {
		var ret, manipular,
			lowercaseName = name.toLowerCase ();

		if (! isXML) {

			// Evita um loop infinito removendo temporariamente esta função do getter
			handle = attrHandle [nome da minúscula];
			attrHandle [lowercaseName] = ret;
			ret = getter (elem, name, isXML)! = nulo?
				lowercaseName:
				nulo;
			attrHandle [lowercaseName] = manipular;
		}
		retorno ret;
	};
});




var rfocusable = / ^ (?: input | select | textarea | botão) $ / i,
	rclickable = / ^ (?: a | área) $ / i;

jQuery.fn.extend ({
	prop: function (name, value) {
		acesso de retorno (isto, jQuery.prop, nome, valor, argumentos.length> 1);
	}

	removeProp: function (name) {
		return this.each (function () {
			delete this [jQuery.propFix [nome] || nome];
		});
	}
});

jQuery.extend ({
	prop: function (elem, name, value) {
		var ret, ganchos,
			nType = elem.nodeType;

		// Não obter / definir propriedades em nós de texto, comentário e atributo
		if (nType === 3 || nType === 8 || nType === 2) {
			Retorna;
		}

		if (nType! == 1 ||! jQuery.isXMLDoc (elem)) {

			// Fixar nome e anexar ganchos
			nome = jQuery.propFix [nome] || nome;
			ganchos = jQuery.propHooks [nome];
		}

		if (valor! == indefinido) {
			if (hooks && "set" em ganchos &&
				(ret = hooks.set (elem, value, name))! == indefinido) {
				retorno ret;
			}

			return (elem [nome] = valor);
		}

		if (hooks && "get" em hooks && (ret = hooks.get (elem, name))! == null) {
			retorno ret;
		}

		return elem [nome];
	}

	propHooks: {
		tabIndex: {
			get: function (elem) {

				// Suporte: IE <= 9 - 11 apenas
				// elem.tabIndex nem sempre retorna o
				// valor correto quando não foi explicitamente definido
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use a devida recuperação de atributo (# 12072)
				var tabindex = jQuery.find.attr (elem, "tabindex");

				if (tabindex) {
					return parseInt (tabindex, 10);
				}

				E se (
					rfocusable.test (elem.nodeName) ||
					rclickable.test (elem.nodeName) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	}

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
});

// Suporte: IE <= 11 apenas
// Acessando a propriedade selectedIndex
// obriga o navegador a respeitar a configuração selecionada
// na opção
// O getter garante que uma opção padrão esteja selecionada
// quando em um optgroup
A regra de // eslint "expressões não usadas" está desativada para este código
// já que considera tais acessos noop
if (! support.optSelected) {
	jQuery.propHooks.selected = {
		get: function (elem) {

			/ * eslint sem expressões não usadas: "off" * /

			var parent = elem.parentNode;
			if (parent && parent.parentNode) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
		set: function (elem) {

			/ * eslint sem expressões não usadas: "off" * /

			var parent = elem.parentNode;
			if (pai) {
				parent.selectedIndex;

				if (parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each ([
	"tabIndex",
	"somente leitura",
	"comprimento máximo",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"moldura",
	"contentEditable"
], function () {
	jQuery.propFix [this.toLowerCase ()] = isto;
});




	// Retirar e recolher espaços em branco de acordo com as especificações HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	função stripAndCollapse (value) {
		var tokens = value.match (rnothtmlwhite) || [];
		return tokens.join ("");
	}


function getClass (elem) {
	return elem.getAttribute && elem.getAttribute ("class") || "";
}

function classesToArray (value) {
	if (Array.isArray (value)) {
		valor de retorno;
	}
	if (tipo de valor === "string") {
		return value.match (rnothtmlwhite) || [];
	}
	Retorna [];
}

jQuery.fn.extend ({
	addClass: function (value) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if (isFunction (value)) {
			return this.each (function (j) {
				jQuery (this) .addClass (value.call (isso, j, getClass (isso)));
			});
		}

		classes = classesToArray (valor);

		if (classes.length) {
			while ((elem = isso [i ++])) {
				curValue = getClass (elem);
				cur = elem.nodeType === 1 && ("" + stripAndCollapse (curValue) + "");

				if (cur) {
					j = 0;
					while ((clazz = classes [j ++]))) {
						if (cur.indexOf ("+ clazz +" ") <0) {
							cur + = clazz + "";
						}
					}

					// Somente atribua se diferente para evitar renderização desnecessária.
					finalValue = stripAndCollapse (cur);
					if (curValue! == finalValue) {
						elem.setAttribute ("class", finalValue);
					}
				}
			}
		}

		devolva isto;
	}

	removeClass: function (value) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if (isFunction (value)) {
			return this.each (function (j) {
				jQuery (this) .removeClass (value.call (isso, j, getClass (isso)));
			});
		}

		if (! argumentos.length) {
			return this.attr ("class", "");
		}

		classes = classesToArray (valor);

		if (classes.length) {
			while ((elem = isso [i ++])) {
				curValue = getClass (elem);

				// Esta expressão está aqui para melhor compressibilidade (veja addClass)
				cur = elem.nodeType === 1 && ("" + stripAndCollapse (curValue) + "");

				if (cur) {
					j = 0;
					while ((clazz = classes [j ++]))) {

						// Remover * todas as instâncias
						while (cur.indexOf ("+ clazz +" ")> -1) {
							cur = cur.replace ("" + clazz + "", "");
						}
					}

					// Somente atribua se diferente para evitar renderização desnecessária.
					finalValue = stripAndCollapse (cur);
					if (curValue! == finalValue) {
						elem.setAttribute ("class", finalValue);
					}
				}
			}
		}

		devolva isto;
	}

	toggleClass: function (value, stateVal) {
		var type = typeof value,
			isValidValue = tipo === "string" || Array.isArray (valor);

		if (typeof stateVal === "booleano" && isValidValue) {
			retornar stateVal? this.addClass (value): this.removeClass (valor);
		}

		if (isFunction (value)) {
			return this.each (função (i) {
				jQuery (this) .toggleClass (
					value.call (this, i, getClass (this), stateVal),
					stateVal
				);
			});
		}

		return this.each (function () {
			var className, i, self, classNames;

			if (isValidValue) {

				// Alterna nomes de classes individuais
				i = 0;
				self = jQuery (isso);
				classNames = classesToArray (valor);

				while ((className = classNames [i ++]))) {

					// Verifique cada listName dada, espaço separado
					if (self.hasClass (className)) {
						self.removeClass (className);
					} outro {
						self.addClass (className);
					}
				}

			// alterna o nome da turma inteira
			} else if (valor === indefinido || tipo === "booleano") {
				className = getClass (isso);
				if (className) {

					// Armazena className se definido
					dataPriv.set (isto, "__className__", className);
				}

				// Se o elemento tiver um nome de classe ou se for passado como 'false',
				// em seguida, remova o nome completo da classe (se houver um, o acima salvou).
				// Caso contrário, traga de volta o que foi salvo anteriormente (se houver),
				// voltando para a string vazia se nada foi armazenado.
				if (this.setAttribute) {
					this.setAttribute ("class",
						className || valor === false?
						"":
						dataPriv.get (isso, "__className__") || ""
					);
				}
			}
		});
	}

	hasClass: function (selector) {
		var className, elem,
			i = 0;

		className = "" + selector + "";
		while ((elem = isso [i ++])) {
			if (elem.nodeType === 1 &&
				("" + stripAndCollapse (getClass (elem)) + "") .indexOf (className)> -1) {
					retorno verdadeiro;
			}
		}

		retorna falso;
	}
});




var rreturn = / \ r / g;

jQuery.fn.extend ({
	val: function (value) {
		var ganchos, ret, valueIsFunction,
			elem = isto [0];

		if (! argumentos.length) {
			if (elem) {
				hooks = jQuery.valHooks [elem.type] ||
					jQuery.valHooks [elem.nodeName.toLowerCase ()];

				if (ganchos &&
					"pegar" em ganchos &&
					(ret = hooks.get (elem, "value"))! == indefinido
				) {
					retorno ret;
				}

				ret = elem.value;

				// Lidar com os casos mais comuns de string
				if (typeof ret === "string") {
					return ret.replace (retorno, "");
				}

				// Lida com casos em que o valor é null / undef ou number
				Retornar == null? "": ret;
			}

			Retorna;
		}

		valueIsFunction = isFunction (valor);

		return this.each (função (i) {
			var val;

			if (this.nodeType! == 1) {
				Retorna;
			}

			if (valueIsFunction) {
				val = value.call (isso, eu, jQuery (this) .val ());
			} outro {
				val = valor;
			}

			// Tratar null / undefined como ""; converter números em string
			if (val == null) {
				val = "";

			} else if (tipo de val == "número") {
				val + = "";

			} else if (Array.isArray (val)) {
				val = jQuery.map (val, function (value) {
					Valor de retorno == null? "": valor + "";
				});
			}

			hooks = jQuery.valHooks [this.type] || jQuery.valHooks [this.nodeName.toLowerCase ()];

			// Se o conjunto retornar indefinido, volte para a configuração normal
			if (! hooks ||! ("set" in hooks) || hooks.set (isso, val, "valor") === indefinido) {
				this.value = val;
			}
		});
	}
});

jQuery.extend ({
	valHooks: {
		opção: {
			get: function (elem) {

				var val = jQuery.find.attr (elem, "valor");
				return val! = null?
					val:

					// Suporte: IE <= 10 - 11 apenas
					// option.text gera exceções (# 14686, # 14858)
					// Retirar e recolher o espaço em branco
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse (jQuery.text (elem));
			}
		}
		select: {
			get: function (elem) {
				var valor, opção i
					opções = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					valores = um? nulo : [],
					max = um? índice + 1: options.length;

				if (index <0) {
					i = max;

				} outro {
					eu = um? índice: 0;
				}

				// Faz um loop por todas as opções selecionadas
				para (; i <max; i ++) {
					opção = opções [i];

					// Suporte: IE <= 9 apenas
					// IE8-9 não atualiza selecionado após redefinição de formulário (# 2551)
					if ((option.selected || i === index) &&

							// Não retorne opções que estão desativadas ou em um optgroup desativado
							! option.disabled &&
							(! option.parentNode.disabled ||
								! nodeName (option.parentNode, "optgroup"))) {

						// Obtém o valor específico para a opção
						value = jQuery (opção) .val ();

						// Não precisamos de um array para um seleciona
						se um ) {
							valor de retorno;
						}

						// Multi-Selects retorna um array
						values.push (valor);
					}
				}

				valores de retorno;
			}

			set: function (elem, value) {
				var optionSet, opção
					opções = elem.options,
					values ​​= jQuery.makeArray (valor),
					i = options.length;

				enquanto eu-- ) {
					opção = opções [i];

					/ * eslint-disable no-cond-assign * /

					if (option.selected =
						jQuery.inArray (jQuery.valHooks.option.get (option), values)> -1
					) {
						optionSet = true;
					}

					/ * eslint-enable no-cond-assign * /
				}

				// Força os navegadores a se comportarem consistentemente quando o valor não correspondente for definido
				if (! optionSet) {
					elem.selectedIndex = -1;
				}
				valores de retorno;
			}
		}
	}
});

// Rádios e caixas de seleção getter / setter
jQuery.each (["radio", "checkbox"], function () {
	jQuery.valHooks [this] = {
		set: function (elem, value) {
			if (Array.isArray (value)) {
				return (elem.checked = jQuery.inArray (jQuery (elem) .val (), valor)> -1);
			}
		}
	};
	if (! support.checkOn) {
		jQuery.valHooks [this] .get = function (elem) {
			return elem.getAttribute ("value") === null? "on": elem.value;
		};
	}
});




// Retorna jQuery para inclusão somente de atributos


support.focusin = "onfocusin" na janela;


var rfocusMorph = / ^ (?: focusinfocus | focusoutblur) $ /,
	stopPropagationCallback = function (e) {
		e.stopPropagation ();
	};

jQuery.extend (jQuery.event, {

	trigger: function (event, data, elem, onlyHandlers) {

		var i, cur, tmp, bubbleType, ontype, identificador, especial, lastElement,
			eventPath = [elem || documento],
			tipo = hasOwn.call (evento, "tipo")? event.type: event,
			namespaces = hasOwn.call (evento, "namespace")? event.namespace.split ("."): [];

		cur = lastElement = tmp = elem = elem || documento;

		// Não faça eventos em nós de texto e comentários
		if (elem.nodeType === 3 || elem.nodeType === 8) {
			Retorna;
		}

		// focus / blur morphs para focusin / out; garantir que não estamos demiti-los agora
		if (rfocusMorph.test (tipo + jQuery.event.triggered)) {
			Retorna;
		}

		if (tipo.indexOf (".")> -1) {

			// Gatilho de namespaces; criar um regexp para corresponder ao tipo de evento no handle ()
			namespaces = type.split (".");
			type = namespaces.shift ();
			namespaces.sort ();
		}
		ontype = type.indexOf (":") <0 && "on" + tipo;

		// O chamador pode passar um objeto jQuery.Event, Object ou apenas uma string de tipo de evento
		evento = evento [jQuery.expando]?
			evento:
			new jQuery.Event (tipo, tipo de evento === "objeto" && event);

		// Trigger bitmask: & 1 para manipuladores nativos; & 2 para jQuery (sempre true)
		event.isTrigger = onlyHandlers? 2: 3;
		event.namespace = namespaces.join (".");
		event.rnamespace = event.namespace?
			new RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)"):
			nulo;

		// Limpar o evento caso esteja sendo reutilizado
		event.result = indefinido;
		if (! event.target) {
			event.target = elem;
		}

		// Clona qualquer dado recebido e prefixar o evento, criando a lista de argumentos do manipulador
		dados = dados == null?
			[evento]:
			jQuery.makeArray (data, [event]);

		// Permitir que eventos especiais sejam desenhados fora das linhas
		special = jQuery.event.special [type] || {};
		if (! onlyHandlers && special.trigger && special.trigger.apply (elem, data) === false) {
			Retorna;
		}

		// Determine o caminho de propagação do evento antecipadamente, por especificação de eventos W3C (# 9951)
		// Borbulhe para documentar, depois para janela; preste atenção para um proprietário globalDocument var (# 9724)
		if (! onlyHandlers &&! special.noBubble &&! isWindow (elem)) {

			bubbleType = special.delegateType || tipo;
			if (! rfocusMorph.test (bubbleType + type)) {
				cur = cur.parentNode;
			}
			para (; cur; cur = cur.parentNode) {
				eventPath.push (cur);
				tmp = cur;
			}

			// Só adicionar janela se tivermos que documentar (por exemplo, não obj simples ou DOM desanexado)
			if (tmp === (elem.ownerDocument || document))) {
				eventPath.push (tmp.defaultView || janela tmp.parentWindow ||);
			}
		}

		// Manipuladores de incêndio no caminho do evento
		i = 0;
		while ((cur = eventPath [i ++]) &&! event.isPropagationStopped ()) {
			lastElement = cur;
			event.type = i> 1?
				bubbleType:
				special.bindType || tipo;

			// manipulador de jQuery
			handle = (dataPriv.get (cur, "events") || {}) [event.type] &&
				dataPriv.get (cur, "handle");
			if (handle) {
				handle.apply (cur, dados);
			}

			// manipulador nativo
			handle = ontype && cur [ontype];
			if (handle && handle.apply && acceptData (cur)) {
				event.result = handle.apply (cur, dados);
				if (event.result === false) {
					event.preventDefault ();
				}
			}
		}
		event.type = type;

		// Se ninguém impediu a ação padrão, faça isso agora
		if (! onlyHandlers &&! event.isDefaultPrevented ()) {

			if ((! especial._default ||
				special._default.apply (eventPath.pop (), data) === false) &&
				acceptData (elem)) {

				// Chame um método DOM nativo no destino com o mesmo nome do evento.
				// Não faça ações padrão na janela, é aí que as variáveis ​​globais são (# 6170)
				if (ontipo && éFunção (elem [tipo]) &&! isWindow (elem)) {

					// Não re-disparar um evento onFOO quando chamamos seu método FOO ()
					tmp = elem [ontype];

					if (tmp) {
						elem [ontipo] = nulo;
					}

					// Prevenir o novo disparo do mesmo evento, uma vez que já o borbulhámos acima
					jQuery.event.triggered = type;

					if (event.isPropagationStopped ()) {
						lastElement.addEventListener (type, stopPropagationCallback);
					}

					elem [type] ();

					if (event.isPropagationStopped ()) {
						lastElement.removeEventListener (type, stopPropagationCallback);
					}

					jQuery.event.triggered = indefinido;

					if (tmp) {
						elem [ontipo] = tmp;
					}
				}
			}
		}

		return event.result;
	}

	// Piggyback em um evento doador para simular um diferente
	// Usado apenas para eventos `focus (in | out)`
	simular: function (type, elem, event) {
		var e = jQuery.extend (
			novo jQuery.Event (),
			evento,
			{
				tipo: tipo
				isSimulado: true
			}
		);

		jQuery.event.trigger (e, null, elem);
	}

});

jQuery.fn.extend ({

	trigger: function (type, data) {
		return this.each (function () {
			jQuery.event.trigger (tipo, dados, isto);
		});
	}
	triggerHandler: function (type, data) {
		var elem = this [0];
		if (elem) {
			return jQuery.event.trigger (tipo, dados, elem, true);
		}
	}
});


// Suporte: Firefox <= 44
// O Firefox não tem eventos de foco (in | out)
// Bilhete relacionado - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Suporte: Chrome <= 48 - 49, Safari <= 9,0 - 9,1
// focus (in | out) eventos disparados após foco e desfocagem de eventos,
// que é violação de especificação - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Bilhete relacionado - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if (! support.focusin) {
	jQuery.each ({focus: "focusin", blur: "focusout"}, função (orig, correção) {

		// Anexe um único manipulador de captura no documento enquanto alguém deseja focusin / focusout
		var handler = function (event) {
			jQuery.event.simulate (correção, event.target, jQuery.event.fix (event));
		};

		jQuery.event.special [fix] = {
			setup: function () {
				var doc = this.ownerDocument || esta,
					attaches = dataPriv.access (doc, correção);

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );