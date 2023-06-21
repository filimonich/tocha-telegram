# tocha-telegram

В это сборке используется методология bem, сборщик vite

пример использования `$self`

Этот код является примером использования переменной `$self` в препроцессоре Sass. Оператор `&` ссылается на текущий селектор, в данном случае `.container`. Значение `&` присваивается переменной `$self`, которую можно использовать в дальнейшем коде для ссылки на селектор `.container`.

Например:

```scss
.container {
  $self: &;

  &__element {
    color: blue;
  }

  @at-root #{$self}__element--modifier {
    color: red;
  }
}
```

В этом примере переменная `$self` используется для создания селектора `.container__element--modifier` с помощью директивы `@at-root` и интерполяции `#{$self}`.
