class Say:
    def __init__(self, name, expression):
        self.name = name
        self.expression = expression

    def to_string(self):
        return f"Say(\'{self.name}\', \'{self.expression}\')"


class Background:
    def __init__(self, color_or_image):
        self.color_or_image = color_or_image
        
    def to_string(self):
        return f"Background('{self.color_or_image}')"


class Switch:
    def __init__(self, script):
        self.script = script

    def to_string(self):
        return f"Switch('{self.script}')"


file = "start.md"
output = "monologue.ts"
switch = "andrew"
start = 57
end = 101
lines = []
expressions = []

with open(file) as F:
    for line in list(map(lambda x: x.rstrip(), F.readlines()[start:end])):
        lines.append(line)

previous = ""
batch = None
# previousSay = Say("", "")
for line in lines:
    if line.startswith("***"):
        expressions.append(Background(line[3:-3]))
    elif line.startswith("~~\t"):
        expressions.append(Say("", line[4:-1]))
    elif not line.startswith("\t–"):
        previous = line
    elif line.startswith("\t–"):
        expressions.append(Say(previous, line[3:]))
        previous = ""

if switch != "":
    expressions.append(Switch(switch))

ts_expressions = list(map(lambda x: x.to_string(), expressions))
res = "import Script from '../Types/Script';//@ts-ignore\nimport {Back, Choice, Done, Else, Hide, If, Say, Show, Switch} from '../Types/Script/schortcut.ts';export default new Script([" + ",".join(ts_expressions) + "]);\n"
print(ts_expressions)
with open(output, "w") as F:
    F.write(res)
    pass
