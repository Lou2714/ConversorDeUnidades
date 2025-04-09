const conversion ={
    Longitud: {
        milimetro: {
            kilometros: (valor) => valor/1000000,
            metros: (valor) => valor/1000,
            centimetros: (valor) => valor/10,
            pies: (valor) => valor/304.8
        },
        centimetros: {
            kilometros: (valor) => valor/100000,
            metros: (valor) => valor/100,
            milimetro: (valor) => valor*10,
            pies: (valor) => valor/30.48
        },
        metros: {
            kilometros: (valor) => valor/1000,
            centimetros: (valor) => valor*100,
            milimetro: (valor) => valor*1000,
            pies: (valor) => valor*3.281
        },
        kilometros: {
            metros: (valor) => valor*1000,
            centimetros: (valor) => valor*100000,
            milimetro: (valor) => valor*1000000,
            pies: (valor) => valor*3281
        },
        pies: {
            metros: (valor) => valor/3.281,
            centimetros: (valor) => valor*30.48,
            milimetro: (valor) => valor*304.8,
            kilometros: (valor) => valor/3281
        },
    },
    Masa: {
        tonelada: {
            gramo: (valor) => (valor)*1e+6,
            kilogramo: (valor) => (valor)*1000,
            miligramo: (valor) => (valor)*1e+9
        },
        kilogramo: {
            tonelada: (valor) => (valor)/1000,
            gramo: (valor) => (valor)*1000,
            miligramo: (valor) => (valor)*1e+6
        },
        gramo: {
            tonelada: (valor) => (valor)/1e+6,
            kilogramo: (valor) => (valor)/1000,
            miligramo: (valor) => (valor)*1000
        },
        miligramo: {
            tonelada: (valor) => (valor)/1e+9,
            kilogramo: (valor) => (valor)/1e+6,
            gramo: (valor) => (valor)/1000
        }
    },
    Temperatura: {
        celcius: {
            fahrenheit: (valor) => ((valor)*9/5)+32,
            kelvin: (valor) => (valor)+273.15
        },
        fahrenheit: {
            celcius: (valor) => ((valor)-32)*5/9,
            kelvin: (valor) => (((valor)-32)*5/9)+273.15
        },
        kelvin: {
            celcius: (valor) => (valor)-273.15,
            fahrenheit: (valor) => (((valor)-273.15)*9/5)+32
        }
    },
    Tiempo: {
        segundo: {
            minuto: (valor) => (valor)/60,
            hora: (valor) => (valor)/3600
        },
        minuto: {
            segundo: (valor) => (valor)*60,
            hora: (valor) => (valor)/60
        },
        hora: {
            minuto: (valor) => (valor)*60,
            segundo: (valor) => (valor)*3600
        }
    }
}

export function convertir(categoria, unidadOrigen, unidadDestino, valor) {
    //equivalente a conversiones.pies.metros(5), mas o menos
    return conversion[categoria][unidadOrigen][unidadDestino](valor);
}