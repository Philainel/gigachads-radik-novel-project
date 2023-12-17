class Say:
    def __init__(self, name, expression):
        self.name = name
        self.expression = expression

class Background:
    def __init__(self, color_or_image):
        self.color_or_image = color_or_image


file = "start.md"
output = "start.ts"
start = 7
end = 54
lines = []
expressions = []

with open(file) as F:
    lines = list(map(lambda x: x.rstrip(), F.readlines()[start:end]))

previous = ""
# previousSay = Say("", "")
for line in lines:
    if line.startswith("~~\t"):
        expressions.append(Say("", line[4:-2]))
    elif not line.startswith("\t–"):
        previous = line
    elif line.startswith("\t–"):
        expressions.append(Say(previous, line[3:]))
        previous = ""

tsExpressions = []
res = "import Script from '../Types/Script';import {Back, Choice, Done, Else, Hide, If, Say, Show, Switch} from '../Types/Script/schortcut.ts';export default new Script([" + ",".join(tsExpressions) + "]);\n"
print(tsExpressions)
with open(output, "w") as F:
    F.write(res)
