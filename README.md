# faqify

A simple jQuery plugin for elegant, semantic Frequently Asked Questions

(c) 2013 Samuel Alexander (connormckelvey.com)

Released under The GLPv2 License.

## Description:

Faqify transforms the basic markup of an HTML Definition List into a simple FAQ accordian with a fiew basic options.
Faqify come bare bones to allow for your on effects and css customizations.


## Homepage:

http://github.com/connormckelvey/faqify

## Source:

Hosted at GitHub; browse at:

  http://github.com/connormckelvey/faqify/tree/master

Or clone from:

    git://github.com/connormckelvey/faqify.git

## Usage:

1. Insert the necessary elements in your document's `<head>` section, e.g.:
   
        <link rel="stylesheet" href="js/faqify.css">

2. Insert the necessary elements before your documents closing `</body>` tag, e.g.:

        <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
        <script src="js/jquery.faqify.js"></script>

2. Initialise faqify in your document.onload, e.g.:

        <script type='text/javascript'>
	        $(document).ready(function() {
        			$('#faq-me').faqify();
        	});
        </script>

Check out the example.html for basic implementation

## Documentation:

Options for faqify include:

    showFirst   : (defaults to true) Whether or not to open the first Answer in FAQ list. Accepts Boolean.
    iconClosed  : (defaults to "+") Icon to show when Answer is collapsed. Accepts stings for text, Unicode, and css url() for images.
    iconOpen    : (defaults to "-") Icon to show when Answer is collapsed. Accepts stings for text, Unicode, and css url() for images.
    iconWidth   : (defaults to 30) The width of the Icon Container. Accepts number in pixels.

