/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

type RNTopLevelEventType =
  | 'topMouseDown'
  | 'topMouseMove'
  | 'topMouseUp'
  | 'topScroll'
  | 'topSelectionChange'
  | 'topTouchCancel'
  | 'topTouchEnd'
  | 'topTouchMove'
  | 'topTouchStart';

export opaque type DOMTopLevelEventType = string;

export function unsafeCastStringToDOMTopLevelType(
  topLevelType: string,
): DOMTopLevelEventType {
  return topLevelType;
}

export function unsafeCastDOMTopLevelTypeToString(
  topLevelType: DOMTopLevelEventType,
): string {
  return topLevelType;
}

export type TopLevelType = DOMTopLevelEventType | RNTopLevelEventType;
