"use client"

import { useState } from "react"

export default function Jogo() {

  const [player, setPlayer] = useState ("")

  const [table, setTable] = useState (
    ["", "", "", "", "", "", "", "", ""]
  )

  function mark(index:number) {

    if (table[index] != "") return

     if (player == "X") {
      setPlayer("O")
     } else {
      setPlayer("X")
     }

    table[index] = player
    setTable([...table])
    checkWin()

  }

  function checkWin() {

// Horizontal
    if (table[0] == table[1] && table[0] == table[2] && table[0] != "") alert("Jogador "  + player + " ganhou")
    if (table[3] == table[4] && table[3] == table[5] && table[3] != "") alert("Jogador "  + player + " ganhou")
    if (table[6] == table[7] && table[6] == table[8] && table[6] != "") alert("Jogador "  + player + " ganhou")
    
// Vertical
    if (table[0] == table[3] && table[0] == table[6] && table[0] != "") alert("Jogador "  + player + " ganhou")
    if (table[1] == table[4] && table[1] == table[7] && table[1] != "") alert("Jogador "  + player + " ganhou")
    if (table[2] == table[5] && table[2] == table[8] && table[2] != "") alert("Jogador "  + player + " ganhou")

// Diagonal
    if (table[0] == table[4] && table[0] == table[8] && table[0] != "") alert("Jogador "  + player + " ganhou")
    if (table[2] == table[4] && table[2] == table[6] && table[2] != "") alert("Jogador "  + player + " ganhou")


  }

  return (
    <>

      <section className="flex bg-[#24221a] h-screen justify-center p-20">

        <table className="gap-1">

          <tbody className="flex flex-col gap-1">

            <tr className="flex gap-1">
              <td onClick={() => mark(0)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[0]}
              </td>
              <td onClick={() => mark(1)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[1]}
              </td>
              <td onClick={() => mark(2)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[2]}
              </td>
            </tr>
            <tr className="flex gap-1">
              <td onClick={() => mark(3)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[3]}
              </td>
              <td onClick={() => mark(4)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[4]}
              </td>
              <td onClick={() => mark(5)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[5]}
              </td>
            </tr>
            <tr className="flex gap-1">
              <td onClick={() => mark(6)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[6]}
              </td>
              <td onClick={() => mark(7)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[7]}
              </td>
              <td onClick={() => mark(8)} className="flex bg-[#F2A20C] text-[5em] w-[1.5em] h-[1.5em] font-bold items-center justify-center rounded-xl cursor-pointer">
                {table[8]}
              </td>
            </tr>
            
          </tbody>

        </table>

      </section>

    </>

  )
}