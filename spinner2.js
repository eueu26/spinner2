const spinner = ["|", "/", "-", "\\", "|", "\n"];

let delay = 0;
for (let spin of spinner) {
  setTimeout(() => {
    process.stdout.write("\r" + spin);
  }, (delay += 200));
}
