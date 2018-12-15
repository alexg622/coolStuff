export const Listen = () => {
  document.addEventListener("keydown", (e) => {
    // 13
    let solutionDiv = document.querySelector(".solution")
    if (solutionDiv.textContent === "?") solutionDiv.textContent = ""
    switch(e.keyCode) {
      case 49:
        solutionDiv.textContent += 1
        break;
      case 50:
        solutionDiv.textContent += 2
        break;
      case 51:
        solutionDiv.textContent += 3
        break;
      case 52:
        solutionDiv.textContent += 4
        break;
      case 53:
        solutionDiv.textContent += 5
        break;
      case 54:
        solutionDiv.textContent += 6
        break;
      case 55:
        solutionDiv.textContent += 7
        break;
      case 56:
        solutionDiv.textContent += 8
        break;
      case 57:
        solutionDiv.textContent += 9
        break;
      case 48:
        solutionDiv.textContent += 0
        break;
      case 8:
        solutionDiv.textContent = solutionDiv.textContent.substr(0, solutionDiv.textContent.length-1)
        if (solutionDiv.textContent === "") solutionDiv.textContent = "?"
        break;
    }
  })
}
