/*
 * Dark Style GNOME Shell extension
 * Fork of GNOME official extension Light Style
 * @fthx 2023
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

import St from 'gi://St';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class Extension {
    _updateColorScheme(scheme) {
        Main.sessionMode.colorScheme = scheme;
        St.Settings.get().notify('color-scheme');
    }

    enable() {
        this._savedColorScheme = Main.sessionMode.colorScheme;
        this._updateColorScheme('prefer-dark');
    }

    disable() {
        this._updateColorScheme(this._savedColorScheme);
    }
}
