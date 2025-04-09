### Formas de obtener un valor de una lista desplegable

HTML
```
<select name="magnitud-fisica" id="magnitud-fisica">
    <option value="Longitud">Longitud</option>
    <option value="Peso">Peso</option>
    <option value="Temperatura">Temperatura</option>
    <option value="Tiempo ">Tiempo </option>
</select>

```

1. **Sin eventos**

JavaScript
```
let magnitudFisicaListaDesplegable = document.getElementById('magnitud-fisica');
magnitudFisicaListaDesplegable.options[magnitudFisicaListaDesplegable.selectedIndex].value;
```

2. **Con eventos**
Arrow Function
```
magnitudFisicaListaDesplegable.addEventListener('change', (e) =>{
    console.log(e.target.value);
})
```
Using This.value
```
magnitudFisicaListaDesplegable.addEventListener('change', obtenerMagnitudFisica(this.value));
```