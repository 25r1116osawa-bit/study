from jinja2 import Template
template = Template(“<p>こんにちは、{{ name }}さん！</p>”)
result = template.render(name=”田中”)