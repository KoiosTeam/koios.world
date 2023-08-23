'use client';

import React from 'react';
import loadable from "@loadable/component";


type IconProps = {
  name: (typeof IconNames)[number];
  className?: string;
};

// List of available icons in alphabetical order
export const IconNames = [
  'award',
  'book-atlas',
  'calendar',
  'chart-simple',
  'check-in-circle',
  'check',
  'chevron-up',
  'chevron-up-filled',
  'clipboard',
  'clock',
  'clone',
  'discord',
  'earth',
  'file-powerpoint',
  'file',
  'gear',
  'hamburger',
  'id-badge',
  'layer-group',
  'magnifying-glass',
  'menu-fold',
  'menu-unfold',
  'moon',
  'sun',
  'trophy',
  'user',
  'users'
] as const;

export const Icon: React.FC<IconProps> = React.memo(({ name, className }) => {
  const iconClass = `icon icon--${name} ${className ? className : ""} block h-4 w-4 fill-current`;

  if (!name || !IconNames.includes(name)) {
      return null;
  }

  const IconComponent = loadable(() => import(`./icons/${name}`), {
      resolveComponent: (components) => {
          const icon = React.cloneElement(components.default(), { className: `${iconClass}` });
          return () => icon;
      },
  });

  return <IconComponent />;
});

