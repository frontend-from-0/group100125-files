# BEM
BEM (block__element--modifier) is a CSS naming convention that makes code modular, reusable, and scalable by structuring classes clearly.

## Block
Blocks are independent components that can exist on their own.

.header
.nav
.hero
.filter
.card
.pagination
.footer


## Elements (block__element)
Elements are dependent parts inside a block.

Header (.header)
.header__logo
.header__nav
.header__nav-item
.header__search
.header__social-icons

Navigation (.nav)
.nav__list
.nav__item
.nav__link

Hero (.hero)
.hero__title
.hero__image
Filter (.filter)
.filter__dropdown
.filter__search

Card (.card) (For articles)
.card__image
.card__title
.card__meta
.card__description
.card__tags
.card__tag
.card__button

Pagination (.pagination)
.pagination__list
.pagination__item
.pagination__link
.pagination__next
.pagination__prev

Footer (.footer)
.footer__section
.footer__link
.footer__social-icons
.footer__copyright

## Modifiers (block__element--modifier)
Modifiers are used to change the appearance or behavior of a block/element.

Buttons (.card__button)
.card__button--primary
.card__button--secondary
.card__button--disabled

Card Variants (.card)
.card--featured (Highlighted card)
.card--compact (Smaller version)

Pagination States (.pagination__item)
.pagination__item--active
.pagination__item--disabled

Navigation States (.nav__item)
.nav__item--active
.nav__item--hover
.nav__item--disabled