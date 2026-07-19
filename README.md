# El Fogón de Don Nino — Sitio web

Guía simple para abrir y editar el sitio, pensada para Facu (no hace falta saber programar para hacer los cambios de todos los días).

## 1. Cómo ver el sitio en tu computadora

No hace falta instalar nada. Alcanza con:

1. Ir a la carpeta del proyecto.
2. Hacer doble clic en el archivo `index.html`.
3. Se va a abrir en tu navegador (Chrome, Edge, etc.) y ya podés navegar el sitio como si estuviera online.

Si usás Visual Studio Code, también podés instalar la extensión **"Live Server"** y apretar "Go Live" abajo a la derecha: la ventaja es que cada vez que guardás un cambio, la página se actualiza sola.

## 2. Estructura de archivos

```
index.html        → todo el contenido y el texto del sitio
css/styles.css     → los colores, tipografías y el diseño
js/main.js         → el menú hamburguesa del celular (normalmente no hace falta tocarlo)
img/               → las fotos del local
```

## 3. Cómo editar el menú (la carta)

Abrí `index.html` con cualquier editor de texto (recomendado: Visual Studio Code) y buscá la sección que dice:

```html
<!-- ===================== MENÚ ===================== -->
```

Ahí vas a ver bloques por categoría (Parrilla, Milanesas, Pastas caseras, Ensaladas, Postres). Cada plato es una línea así:

```html
<li>Vacío</li>
```

- **Para agregar un plato**: copiá una línea `<li>...</li>` que ya exista dentro de la categoría que quieras, pegala debajo, y cambiá el texto de adentro.
- **Para sacar un plato**: borrá la línea completa, desde `<li>` hasta `</li>`.
- **No hace falta poner precios.** El menú se muestra sin precios a propósito, porque cambian seguido. Si alguien pregunta el precio, lo consulta por WhatsApp o llamando.

El flan casero tiene una etiqueta especial ("el orgullo de la casa"). Si algún día querés destacar otro plato de la misma forma, copiá esta estructura:

```html
<li class="menu__destacado">Nombre del plato <span class="badge">tu texto</span></li>
```

## 4. Cómo editar textos (Nosotros, horarios, dirección, etc.)

Todo el texto visible está directamente en `index.html`, dentro de etiquetas como `<h1>`, `<h2>` y `<p>`. Buscá el texto que querés cambiar (con Ctrl+F en el editor) y reemplazalo por el nuevo, dejando las etiquetas (`<p>` y `</p>`, por ejemplo) intactas alrededor.

Los datos de contacto (teléfono, WhatsApp, Instagram, dirección) aparecen en varios lugares del archivo: en el botón de reservas, en la sección de Ubicación, en el footer y en el botón flotante de WhatsApp. Si alguno cambia, hay que actualizarlo en cada lugar donde aparece.

## 5. Cómo cambiar o agregar fotos

1. Guardá la foto nueva dentro de la carpeta `img/`. Se recomienda que no pese más de 300-500 KB para que la página cargue rápido (podés comprimirla en [squoosh.app](https://squoosh.app) antes de subirla).
2. En `index.html`, buscá la etiqueta `<img>` que querés cambiar y reemplazá el nombre del archivo en `src="img/nombre-actual.jpg"` por el nombre de tu foto nueva.
3. Actualizá también el texto de `alt="..."` con una descripción real de la nueva foto (ayuda a que Google entienda qué se ve en la imagen).

## 6. Cómo cambiar teléfono, horarios o dirección

- **Teléfono/WhatsApp**: buscá `5491164099986` en `index.html` (aparece en los botones de WhatsApp y en el link de llamar) y reemplazalo por el número nuevo, siempre sin espacios ni el símbolo "+".
- **Horarios**: buscá el texto "Martes a domingo" en la sección de Ubicación y en el footer.
- **Dirección**: buscá "Casella Piñero 187" — aparece en la sección de Ubicación y en el footer. Si la dirección cambia, también hay que actualizar el link del mapa (la parte que dice `src="https://www.google.com/maps?q=..."` en la sección de Ubicación).

## 7. Dudas

Cualquier cambio más grande (agregar una sección nueva, cambiar la estructura del sitio, etc.) es mejor consultarlo con quien armó el sitio antes de tocarlo, para no romper nada.
