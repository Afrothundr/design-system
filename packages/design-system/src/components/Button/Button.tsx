import React from 'react';
import classNames from 'classnames';

export type CustomButtonComponentType = React.ComponentType<any> | React.FC;
export type ButtonComponentType = 'a' | 'button' | CustomButtonComponentType;
export type ButtonSize = 'small' | 'big';
export type ButtonType = 'button' | 'submit';
/**
 * A string corresponding to the button-component variation classes.
 * The danger variation is deprecated and will be removed in a future release.
 */
export type ButtonVariation = 'primary' | 'danger' | 'success' | 'transparent';

type CommonButtonProps = {
  /**
   * Label text or HTML
   */
  children: string | React.ReactNode;
  /**
   * Additional classes to be added to the root button element.
   * Useful for adding utility classes.
   */
  className?: string;
  disabled?: boolean;
  /**
   * When provided the root component will render as an `<a>` element
   * rather than `button`.
   */
  href?: string;
  /**
   * Access a reference to the `button` or `a` element
   */
  inputRef?: (...args: any[]) => any;
  /**
   * @hide-prop [Deprecated] Use inversed instead
   */
  inverse?: boolean;
  /** Applies the inverse theme styling */
  inversed?: boolean;
  /**
   * Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).
   * Not called when the button is disabled.
   */
  onClick?: (...args: any[]) => any;
  size?: ButtonSize;
  /**
   * Button [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute
   */
  type?: ButtonType;
  /**
   * A string corresponding to the button-component variation classes.
   * The `'danger'` variation is deprecated and will be removed in a future release.
   */
  variation?: ButtonVariation;
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

type LinkButtonProps = Merge<CommonButtonProps, {
  component: 'a' | 'button';
  /**
   * When provided the root component will render as an `<a>` element
   * rather than `button`.
   */
  href: string;
}>;

type ButtonButtonProps = Merge<CommonButtonProps, {
  component: 'button';
}>;

type CustomButtonProps = Merge<CommonButtonProps, {
  /**
   * When provided, this will render the passed in component. This is useful when
   * integrating with React Router's `<Link>` or using your own custom component.
   */
  component: CustomButtonComponentType;
}>;

export type ButtonProps = CommonButtonProps | LinkButtonProps | ButtonButtonProps | CustomButtonProps;

export const Button = (props: ButtonProps) => {
  if (process.env.NODE_ENV !== 'production') {
    if (props.inverse) {
      console.warn(
        `[Deprecated]: Please remove the 'inverse' prop in <Button>, use 'inversed' instead. This prop has been renamed and will be removed in a future release.`
      );
    }
    if (props.variation === 'danger') {
      console.warn(
        `[Deprecated]: Please remove the 'danger' variation prop in <Button>. This prop has will be removed in a future release.`
      );
    }
  }

  function handleClick(e: React.MouseEvent | React.KeyboardEvent): void {
    if (!props.disabled && props.onClick) {
      props.onClick(e);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent): void {
    // Trigger onClick on space key event for `<a>` elements
    if (e.key === ' ') {
      handleClick(e);
    }
  }

  /**
   * Since any number of arbitrary props can be passed into this component, we
   * use a destructuring assignment to get only the props we want to pass to the
   * rendered HTML element. For example, the "variation" prop is used to generate
   * the classNames, but doesn't need to be passed to the rendered component, so
   * we omit it here so that it's not included in the props object.
   */
  const {
    className,
    component,
    inputRef,
    inversed,
    inverse,
    onClick,
    size,
    variation,
    ...otherProps
  } = props;

  let ComponentType = component;
  // If props.component is 'button', it is not a custom React component. In cases
  // where the user didn't specify a custom component and did include an href, we
  // want to use `<a>` for our element.
  if (ComponentType === 'button' && ((props as unknown) as LinkButtonProps).href) {
    // Need to assert any for TypeScript because T is technically 'button'
    ComponentType = 'a' as any;
  }

  const variationClass = variation && `ds-c-button--${variation}`;
  const disabledClass = props.disabled && ComponentType !== 'button' && 'ds-c-button--disabled';
  const sizeClass = size && `ds-c-button--${size}`;
  const inverseClass = (inversed || inverse) && 'ds-c-button--inverse';
  const allClassNames = classNames(
    'ds-c-button',
    disabledClass,
    variationClass,
    inverseClass,
    sizeClass,
    className
  );

  const attrs: any = {
    className: allClassNames,
    ...otherProps,
  };

  if (props.onClick) {
    attrs.onClick = handleClick;
  }

  if (component !== 'button' || ((props as unknown) as LinkButtonProps).href) {
    // Assume `component` is not a <button> and remove <button> specific attributes
    attrs.role = 'button';
    delete attrs.disabled;
    delete attrs.type;
  }

  return (
    <ComponentType
      ref={inputRef}
      onKeyPress={ComponentType === 'a' ? handleKeyPress : undefined}
      {...attrs}
    >
      {props.children}
    </ComponentType>
  );
};

Button.defaultProps = {
  type: 'button',
  component: 'button',
};

export default Button;
