#!/usr/bin/php -q
<?php
error_reporting(E_ALL);
require_once "PHPJS_Library/PHPJS/Library.php";

// Check for CLI
if ((php_sapi_name() != 'cli')) {
    die("CLI Only");
}

$dirFunctions = realpath(dirname(__FILE__)."/..")."/functions";
$dirCompile   = realpath(dirname(__FILE__)."/..")."";
$PHPJS_Compiler_Shell = new PHPJS_Library_Compiler_Shell($dirFunctions, $dirCompile);

#$PHPJS_Compiler_Shell->setSelection("category::math");
#$PHPJS_Compiler_Shell->setSelection("all");

$PHPJS_Compiler_Shell->setSelection(array(
	"function::array_merge",
	"function::in_array",
	"function::base64_decode",
	"function::base64_encode",
	"function::date",
	"function::date_parse",
	"function::number_format",
	"function::parse_url",
	"function::preg_grep",
	"function::preg_quote",
	"function::sprintf",
	"function::strtotime",
	"function::trim",
	"function::uniqid",
	"function::urldecode",
	"function::urlencode",
	"function::utf8_decode",
	"function::utf8_encode",
	"function::min",
	"function::max",
	"function::log10"
));

// Set flags
$flags = 0;
$flags = $flags | PHPJS_Library_Compiler::COMPILE_NAMESPACED;
$flags = $flags | PHPJS_Library_Compiler::COMPILE_MINFIED;
#$flags = $flags | PHPJS_Library_Compiler::COMPILE_PACKED;

echo "/*\n";
echo " * This package built from phpjscompile.php > ../build/php.js in the tools directory of the PHPJS project.\n";
echo " * You should update PHPJS from git before you build a new php.js with \"git pull\".\n *\n";
echo " * Functions in this package: ";
print_r($PHPJS_Compiler_Shell->getSelection());
echo " */\n";

echo $PHPJS_Compiler_Shell->compile($flags, date('Y-m-d'));
?>


//=====When updating leave this last line=====
window.php = new PHP_JS();
