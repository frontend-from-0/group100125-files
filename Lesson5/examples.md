# Using BEM helps write efficient and maintainable selectors by following these best practices:

## Avoid Overly Specific Selectors  
❌ **Bad:**  
```css
.card div p {
  color: #333;
}
```
✅ **Better:**
```css
.card__description {
  color: #333;
}
```
🔹 Why? It prevents deep nesting and makes styles easier to override.


## Use Class-Based Styling Instead of Tag Selectors

❌ **Bad:**  
```css
.card p {
  font-size: 16px;
}
```

✅ **Better:**
```css
.card__description {
  font-size: 16px;
}
```

🔹 Why? This avoids unwanted inheritance issues.


## Use Modifiers for Variants Instead of Extra Classes

❌ **Bad:**  
```css
.card.featured {
  background-color: #f4f4f4;
}
```

✅ **Better:**
```css
.card--featured {
  background-color: #f4f4f4;
}
```

🔹 Why? Makes it easier to toggle styles dynamically.


## Keep Selectors Flat (Avoid Nesting)

❌ **Bad:**  
```css
.header .nav .nav__item .nav__link {
  color: blue;
}
```

✅ **Better:**
```css
.nav__link {
  color: blue;
}
```

🔹 Why? Reduces specificity issues and improves maintainability.


## Use Attribute Selectors for State-Specific Styles

✅ **Example:**
```css
.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
```

🔹 Why? Works with the existing BEM class .button


## CSS Nesting – Keep It Readable
CSS now supports native nesting, but keep it simple.

✅ Example with Nesting:

```css
.card {
  background: #fff;
  padding: 20px;

  &__title {
    font-size: 20px;
    font-weight: bold;
  }

  &__description {
    color: #666;
  }

  &__button {
    background: blue;
    color: white;

    &:hover {
      background: darkblue;
    }

    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
```

✅ Equivalent Without Nesting:
```css
.card {
  background: #fff;
  padding: 20px;
}

.card__title {
  font-size: 20px;
  font-weight: bold;
}

.card__description {
  color: #666;
}

.card__button {
  background: blue;
  color: white;
}

.card__button:hover {
  background: darkblue;
}

.card__button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
```

🔹 Why?
- Less repetition (no need to repeat .card__ everywhere)
- Better readability (hierarchical structure)


## 🎯 Summary
- Use class-based selectors instead of deep tag-based selectors
- Modifiers should use -- syntax for variations
- Use [attribute] selectors for state management
- Keep CSS nesting readable and avoid excessive depth

