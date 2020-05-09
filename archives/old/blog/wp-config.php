<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'blog');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'a56fg8c');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ')A%0 zP`_3o4* -CJj>9J3|?q%O|Fs[r;/()%=?-UR#_ VWW1?Y v|H=h`%@B}>C');
define('SECURE_AUTH_KEY',  'MSV5^^]@<f.,-h|#EmE4FRaV)4M-TstvnQgt-3SX~gr[=^*V@?`:Fj;%!RBIm|(_');
define('LOGGED_IN_KEY',    'F7zh8*:>3T<FoO+ahjld&X51P/z ?@S2YKb~k^s|BZOphEm]h.R3f>|`GS>JC$28');
define('NONCE_KEY',        'k2-Vb42`CPstB(-D&jkK~0s+K2[E~av}.Hhfh:>NVospA-$k]5FoO([2K<A*[fh%');
define('AUTH_SALT',        '8`mO|C/m bkYY$r3*T2`V?ZX__O+Ga&8+:-X%.*H?B)|q0z@w=sJJ&.Z?~~(#mx+');
define('SECURE_AUTH_SALT', 'g+V[vw)~9X<nb Jf@-YY^TslUWh>ooh1XSiN7e;5qMcl<)ov|9)6m#^6B?f7apN;');
define('LOGGED_IN_SALT',   ':B-^CF+YvJZNsW7=G|/&~-om}6nI{[zc/J`N6XsxxW9D3QmZ[k/B&& Ry*^Al0MD');
define('NONCE_SALT',       'c?D+i-i4;sQF;|Bb!S(h:vj7~X:ORl|sN7FeU ]#3!+Wued-?8Hn&@ /n06zy;7p');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
