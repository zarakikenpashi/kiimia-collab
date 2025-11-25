import { useState } from "react";

export function StepPayment({ formData, setFormData, prev,next }) {
  const [paymentMethod, setPaymentMethod] = useState("applepay");
  return (
    <>
      {/* <div className="space-y-4">
        <h2 className="text-xl font-semibold">Paiement</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { id: "card", label: "Carte bancaire" },
            { id: "mobile", label: "Mobile Money" },
            { id: "paypal", label: "PayPal" },
          ].map((p) => (
            <div
              key={p.id}
              onClick={() => setFormData({ ...formData, payment: p.id })}
              className={`border p-4 rounded-xl cursor-pointer text-center shadow-sm ${
                formData.payment === p.id ? "bg-yellow-500 text-white" : "bg-gray-50"
              }`}
            >
              {p.label}
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-4">
          <button onClick={prev} className="px-4 py-2 border rounded-xl">Retour</button>
          <button onClick={next} className="bg-green-600 text-white px-6 py-2 rounded-xl shadow">
            Confirmer le paiement
          </button>
        </div>
      </div> */}

      <div className="w-full min-h-screen bg-gray-50 p-4 flex justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Travel Summary */}
            <div className="bg-white shadow rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-4">Vos trajets</h3>

              <div className="rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">nov. 20</p>
                    <p className="text-base font-semibold">Abidjan, Gare de yopougon</p>
                    <p className="text-gray-500">jeu., 15:21</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-semibold">Gagnoa, Marché Catalina</p>
                    <p className="text-gray-500">jeu., 18:40</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  Nous enverrons les billets sur le Contact fourni :{" "}
                  <span className="font-medium">0788405840</span>
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white shadow rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-4">
                Veuillez sélectionner le type de paiement préféré
              </h3>

              {/* Payment Methods */}
              <div className="flex gap-4 mb-5">
                <button
                  onClick={() => setPaymentMethod("wave")}
                  className={`border rounded-lg px-4 py-2 flex items-center gap-2 ${
                    paymentMethod === "wave"
                      ? "border-[rgb(255,78,0)] shadow-sm"
                      : "border-gray-300"
                  }`}
                >
                  <img src="data:image/png;base64,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" className="w-8" />
                </button>

                <button
                  onClick={() => setPaymentMethod("orangemoney")}
                  className={`border rounded-lg px-4 py-2 ${
                    paymentMethod === "orangemoney"
                      ? "border-[rgb(255,78,0)] shadow-sm"
                      : "border-gray-300"
                  }`}
                >
                  <img src="https://play-lh.googleusercontent.com/Cb5IiyzqRCzXaC4NPpEfGa2EgA2ImvtrqUXUcPGpg7E__5iugp0XFkzhBjwkNLpAfYFp" className="w-10" />
                </button>

                <button
                  onClick={() => setPaymentMethod("momo")}
                  className={`border rounded-lg px-4 py-2 ${
                    paymentMethod === "momo"
                      ? "border-[rgb(255,78,0)] shadow-sm"
                      : "border-gray-300"
                  }`}
                >
                  <img className="w-10" src="data:image/jpeg;base64,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" />
                </button>

                <button
                  onClick={() => setPaymentMethod("moovmoney")}
                  className={`border rounded-lg px-4 py-2 ${
                    paymentMethod === "moovmoney"
                      ? "border-[rgb(255,78,0)] shadow-sm"
                      : "border-gray-300"
                  }`}
                >
                  <img className="w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABlVBMVEX////sZwfsZQDsZAAAXKoAXKjrYQAAXKbsaQcAW7TqZwjrWgAAW7bsagjrXwDsZwD3aAAAXK7qVwj/aQDpTAAAW7Dyon7qUwAAW7n97+TxZwDVZyP++/gAWb3+9/HvgVplX5npRQAAWc0AWcTHZUCOYnrpRwAAWsD98ur628kAWNTNZkguXahHXK0AWsfoOADvhkWqY1j86NroMgDjAAD50rjwj1XwaSP749P3xaf3x7TxmHXyn4T1tZ3518n73sn0rILtdCLvgDn1to/zo2bymmXfZjLwjU/0rHj51r9NXaD0rYPufkzvgTD2uJvzqpHsZ0f4zKnueFjrXCbqVzD3wp7udxbudyzviDbxk0fpZy9OXZWuYmluX4ZwX4+6ZFmYYlbZZjjdZx1gXaq0Y2qCYI2kYnqQYX9VXo2dY2e6ZUi8ZVZPXanUZUHHZzUrXZlXYHDBZgCVYm92X5d4YHuUYYfIZVK6ZT4AWOHvg1TvhWzoNxvteGnwjnzsaEvzpJj2wbjqWkLlJB7pTjfqZlTwh37ymlkVRCMiAAAWc0lEQVR4nO1di3faRr42IxACIYFBWIgI2cQJhjYxRBjzxsEu2BjHUIPjlLzqNGk2TbK9N93tbZxN0mzT/N13RjDiaR7m6Ry+c9pYw0iab2Z+z5FGCwtzzDHHHHPMMcccc8wxxxxzzDHHHHPMMcccswsxEgrlhGm3YnwQt3Y2t7cDmeOIOO2mjAfy7QBjBgCY07u3t6bdmHEgt8kAoEEAgAnsfH1zNXRS41fjuClPu0UjRjRd51flGIhMu02jhJQHzQQhiLu5aTdrdPDusW0EIUVzaNoNGxWEL2w7PzRT2eOvw2zI9zoThKD3vgaKvrvkeQQhxe+kabdvWIghhjifoEZDZi651ZCOzR10TJO+2b3UVkPY6UUQ6puA7/IKYyTTmyCkuB29rBS3+iIIJ+olpSiGdqm+CKJR3PFOu7mDQ4xut3tq51JM71w6qyHtnPTNT6F4+5JRlPaYQQhCitTlsv3eTP8zFFMEXy4RRfkeMShBSJG4c2nUTY7p4ol2AXn3kqQ2QkRXT7QrxcvgpIo7naLdvin6pt3+npA6hvN9g0jPemojkrmAjmmieBKaaQ/OFxiSIKI4w06qFAoMy69KcVYNo3R8clEl2gRwcjybFL07oyGI1M1MUpT30iMiiCbqDEZTkc0BXe3uFJn8rI1iLjCwq90VgMnPlkY9To+Un0JxppLFO6MdwCpFYm/atFSI35GjJwgpkt9Nm1kN3vOXJYYE/cO0uSmI3LtYMNgXxe+mL4tiaHRWsAPYqWc2pOOxEtQAkJkuRW+++8LSCCiaM9P0buRBU4aXjKLo63NZYkiKzO0p5afE0O4Y7HxHintToShGRxUr9UFxGqPozU+MoDKKE5dFb2bcSrSF4u0JU4xsTkYEGylO1C7mBlo4Gw1FapLB1Jj9mHMoTjCYyve7dj1iiuyEKEpfhs75XhT0RCjKmx1nqFlBxyOz02lxOs1NtZ0WXATMZmfTmbC8qW4TxZ3xEwxtdyToDCNozEZ0YHSSyqEy1E5LuJLNZithixNXtjQUmcOV6pm1n5QTw+dSZMdNUYymO0W7RsuVV/fv399/YKnOX9vDm/Do2ROL0WnJ3npkN5kM2kePKwpHVPT00SIqegiLbD+aYNUbLyzV6zA39+/fv7HCWM5hCMB41zS8h52VKGT4zZrDcfWnU4ty9OSbVYfr6k9Zi7PydH99zWGwGxxrq/uPw05I0PngFS5aX3lqOa3WpZxw+I22H/9wuFzfPLOcK+nAOE6K8m1zZysBGbp0ev2i44HS97brV/U6nWEla9P8e92h1SvQLa6t/6wxA9vzb5QinVJ09Y3tH2t6vf3mPy1GjRHY7jvgZW5esRjPYzjWlamtcx+vQAwXtVqd61HYaTRanC6DTqs1QYYPXHbE1eEw2bU6vcv10mm7dXURFtkdDgcqclx9fW1dq7ObUN8YLWaDSad1rVic5zPUgO1xrS+Gds8185ihwfA7bKjtxVW9VmF45RVssN5lX3m0Yjdptfq1lbDRYYI/ugywyICKVvediw6d1vHMDGew7ZdVrXZx7ZatC8HxUYxun59RqzHUalefO80Wp8FUZfjkgQGOk+Pm79kn2aeQrM5kOr21Dn8zvXqZfXJ665VBq1tcZ56t6nWmV6dwZtoerul1dteTLpNUoRgYw0K4lL/bxVHDDHUO+2uL7aUyhIjhddMibPA1GzSIlqf2Rd2i69p1l0676KgWPTAs6rTr166tLlanKdSkqEdW6nblHJh3R/44g9A9XaGOoW71OmFbgSQUhleuOxb1DoMiVZZvbyARu3YdTsnFmwzSK5bXN+063eot5w1Y5nqmgTK6Bs9b7zFJEUb+WLHcI1ZSGepdryqna8qfmKHJ4ERDAhkamhlqbN9WGdqur+p0jlevbbZHJi2cyeYekxQBbI406P++18JZfQzta/98vqZrYKjryNCIrIrK8LXDDpXrA9sVOEn16/+y9eSHLP/uCCPi3vmYGkM71BymX/XwL8dADMMra3qt67rlMRTbxdXT3pMUUSRGlu+X8r1TogpD3eKvvy5CivC/tf/R23X9M7Q9XkO21PgGugJr+z31TA3siBamhEwfC2cKQ73ptxewyXCqmnT/Cwn3z9ByzWHQO/ZPH0KG0MnpZwgRRhNLRTb7WVeqMjT89PI3E1I3Vx9eWdfp2jSN6TxN4ww/WtObbl6Dikb7zZW+GY4ilhJz211WBin1nypDu+HxGxNSOFcVu97LWtQZaiyP13SGmz/u2/WrN2ygb4Ya9nhIglIUvbDE0hjNlwdqOVGTQ8OtX2Cb9Q6H5V8KQ8XiQytvs1iq5l21+C9RieVnE7L4v9iMltMbDu3ir9pF3Td9GMOGJoDh3u4TdlBKlDxYruGgaTyBFZcvp4kawxfMCtSiV6/bHlYZ3lK8NsMv377+9sFN5LUZTl8ir81w4xYseoE8GPs6iiI1yMRAU2FyMH0Yw4ZGDPUgo6z4MSQdFarw5miWUq9N8WcC/iHAY4a2N+uO1fUnNYbZJ6/gnNSbXPYbdgfUM/rVR2HzTQdyTKtFSGbv2+BdLC8NSEf1aQwbKW5f3H/zbSpDxpIpXOJd5hj10mRZvbRYoVWGp/9+9uy6BTOE0RMUPviDwb6IQiXX7xYYPdkhRbXoqmL+nKf7DlRx/f8GmaQKxQu/Lx2qhhIUnVUZikm/OoaMJ6FWlUtolmr1i/YXKL/ktDhtD2G4gCJg589rkHotAna5HoRhBPxmvV605npg00AXFU5TFEKbTE+6RYYdGZov9nKfGK29FEnxy/ULpHhsOiiyVPcLc+80NpTFWF9/YwEIRts//lCyGJDu0/21NRcMd11raysvNTAGBJYHr+pFjy3V5BXUpusu1x8PLefmoLpQvICLKqt+DMXH6/6f8JbHQ+g/rNeOcmbLk5VHDx+tvLRojAi2Nz/Bo+dwQJyW06fPVvb391eePc1WM1HAcvqgWvQcFlUJapyV57/BU173qWcAW3ckAZMf2EWNZOpJbS5RXxCREu7qNGX4owansGBFLURJQGNtBJwoRVhB2URjNZt4elrPJlaLThuLNDgd2Z/DRhHWk4aHzAAz6CtTuU1N/XQ+WeciJrlqoTnYuKtFnIa8nQjqacpRrbnAqRi/psY7axWMLUV9EWRIdzzaaLqI9EBmsfmNMyIca/gtFUZkNIx7uaFQOqi5AkaGQbq2+v96h8NjqlpMaZpgVEootTqqqaDKo/GgiSDtLngjR43+BzgZgKK00/SQIVlJNfzojfOoTcDfqL68xWp3Mhre7Udw02q74B80Vy31+z1sI0eKYblqOUdWq9NcDQSsxuIDsrlfKMpTjokL3jO+sZxI9x3zS/nmdAXbxFAsoGnKBAuNp8hlpGEZ4A+mM1FfxBfNMBu00mbKTAeDxsBSzLcV8cXyu3SQVoeEoYNcYCcXieR2ApzfDMvJdEDBdgC6UurBbvP7RQwZPFG6d6nZhyQDfWobOUA3x0r0QVPnpCosVDOVptjTVyaQ7nm3VFfakbDfjBSCu3LYpMlzRa6mi8zuT/WJJRb8LAM4LA8inPZcAd9juWGwGLP7Xe20Q2tzWM7e64ti5E5rKNFoDiEEODmYYKzppFgJUBRXbJ4mBTgsLBttvYEY51EPUiwXb1J/OStL8LEaKTnManjM0EurTaII/p1ymgh/C1Vamsr2E/Pn2vY+oPj3TV0jFniGO2jWzYclM+WJt16+4Kb4g3bhEJEkU2w52VIes/Jh7ET7OKKu4GQOt4mky3HoKYre2PKhuCAftYQ6GrJ3KCV32NyBLzTTiYVpd6r5tDjPuN+29Z/3Lc8fdRB/oUxSRKmV4II3EVT7I+QGrOorRvxKOwBLl88gPymSPPAHE+KCtNzKEDC9fBvxu/Zol6APmyulssGlFvMKqZTbLa4Y4zzvO4nGkofhE+3FMf8ZbmDUTdFq58T8DGqGtfg+JUpyKBF28xoa+VlxvrWxPRfBQx3yFWy4WeYWhP+UWgZGPKL9nYI0OesvdJKMLT9dUZmLao1IEfeHmIB9cIbFf8nNkLz1qODzyrHEAe+hKYqikXI4LLVmAEGv1zPvtecMqfpswU2KJ1rGS/jgCatFglz/czmozkUhFamXe/xL+GKp5EfcX/LR+1oV6S0HGeLGvvVQlbNDnw/SozmapCgc76TKrSMCmO77h0U65e3pNlHaaisoq+ZR+vPsKIGbJpz5sSqV/lP58BGPm8D51RlY5IJFrECPPtb+EsI8QydqB6KZT+8uFRR6BDYbJAtnllxsFSrAdA/4v++Uc+LPcMNag7AI/iFa9uNxThXdHnXGCkdl/Gdkg+c+4YBZ8Fcw8TMPRQZr15EPsAMs86yGxsMv8Wz6BPo3kF6DD4OcZalNmfYaw+OODNU52RKheNWk+iHHY/Yx2kzymK5c/IzHKhdk2CJmKG9sqn1AMx6+xiuVxRKfcmvIMB5+r4cA6OGWJteN4hPw7m9bGRL3ulvE7zslRnk8WxYyzQKZVH3vJXcYq4gkT9FhTCtlrStHP0V/UG3BRr72l+9T0O+u8RI/lvENoPakK9jhkf0dQuJqWJ5pZch+35XggtxBDgl1tiyc5Ztq45bBqeZ/i1VEgYNtUwfUrxoLZCCOMN2dDdwQbzJRSGHhO1O7IA8ZfmgY/g4dr6iaHWtzg8kfejk1P7QPIllRjcXZ28a6uQ1MRDgKLtWuLCU46MfUmIhJPy5fgMqRXsbTPbOh6ipRUtsUC6ojHvcwdMPwd2KoqJpcuYkhuNszvNhqF0RalZ6Ft+8arUSlhNsW+RDEToE3wTEcTnqIBbV84YSnWNXIbwc7BOQ+q1+V+AMe+or4oODuxFBxzIVyk3nrJ//d7tM0GIuD/zYoqtCG6j74iqojLiD/DXt50vt3avBA8OYSpiuWufY75ziexu6BFCY1fLxTZNHIEKmapgw1vdOH4y3ea1lmgs4TnoxipT4kC15OlaWFaMmNqUeyNOXGOl8oqvZBdJNEWfWk/3vSel/fQZDUqO7hll8DrPhACrMdGDJmxcXL1NkDtr+XFYWWZ++pujxIdIN3nXfX8zQ7HivuhRzsfVUDRayqsRCCZlbNH4c2Mrg4lIvIMGA+CHIw3i/hE0OQYRgruHpkobbJDFjOXTqUUIiI9Swg+n0lw/td82oo/R6zEtx8FsuGt0K7VQ9wyX+AJS/KEaxqDn1u1VlA5vADPuFYNRaRTxsc5/Fv+AkoanX3EOoWoNLdcrcoeJK2lovxmHLpUKn2IxhgVV9qfhubxh7kwlaQLeMxKXA0i5mLS6qxgKEw51dpxYKqLO0EG1RpfgMv+okFD8fz7oMdK8s0BBOHQZZXvaGYu2GSkixNlz8kcsotJDl5gMcX7A6Q9haj23W7SKjyABusKgv5E8un1S6J1xlKseUC7kuoSlVjkXEz/KZ6oDJckJJHR0dLwkLhHcvQR2pA+Ln46W98mUNlpQSyhLODDxeP4jH0iyjIsfclPxZD82APEIm+ejq4LhyKGd6VFcStDBfA5cKRp9JphggVt+oibPNmK54M0kEwU68lCUpSIlliGzJegs+nClWGZzSApHmerhzFo6hc9EZiH89K/r/OdmtDCLYHXWGTM1gY687kwqaHAeEDBWGCcautTBV5d6cbFPx1+2AlQUn1M7Mc16b1EEW6LexHOOFomg0fvU8kUwLqkBRkV+Tcn/9O+qRQ1R6Ck7ZsUE8IeJMuWnW1Fk5oCvpw1RXfxlWLWKU1qVQt5mjVHRLcgFBVqVAkg4dt1aVlvnF9RIUY3s4sHUZDvkgqlkx+/PuoEv589j4ZUqLQahYTXGgPDSl6R+ke+kwVMb5RAVH1oD5qJTTutu6PlWhWTb5t+aGxwKogUiYJT0tUDccwy5KllmwCglzazsTj78/Ojg6y2eWz9x//TMlelRAKLoDxYlu8ir4A6h8+rt6qycUHbtXVKdAA2bKmu3iTZZqpj3/IzdBZPEChEsHwxWaKcqJEU9CjbSUOa3sCm0vJP/+MxXKQmrd6F1GSvIKcOjzcZikALrzzgpxhG1wLaIYb3EOKtuLLigkepa9LZ/W1ZiF2pqh/1VigiEONtZLQhjF0MVFX73LyyKo4LnQx2draqPvOD4G3iY8fk7EqkslCIn70+fOn7FkBOW3kEFtLSHmWYDeXqsjv0o3OE2lcwsgi35Ai6U/Lhz7BK/ii8Q8lGsDK5Hatxu0TliJP8IHy9ArFWovxaKRav1jCaXa6XLtIAeuOvJv5ko/9mYwfVFie83jcbo4OnxzEC3C2inFaw34Z5skv8ZghWGsNzd4hBXC5FedOSLpULhaLZSiA1SKKxFXQ0grRciHAKvXLqD6oXYKh3UFPuZitvPsLjzCUtFIlHgtB4fMKkVQqFYnIgleqBl15K/vDkC97Rbpt/9sGQJAkOcDbNNX6dfFmuGIuHoRRf3ADByXCX1BUSGupVM7uReXW4cqVe4a8PSHfGWrXroEAhRlqGnlnc3dJVWOHiuMJfW2C5vx+jtrMx6CzrjzhIm+FMndH8PyltDeptwwZ1tpmLbwf1EwMxTBmkvb4gw2ojIBg23rp+EDy7T5NoSURg1aEUU6RIAAwgzsjekh4oF1WLw5At68ARNpSvnVQwzwL1Yrc5gTeNgRsvFWTRNoWlxpABEb5sH4kM/59EzQarhhrlCsxtdy2tlQH2B7tFweESQgjw1vPYrX1G9GbSma7EQyM+qUZMTqB934ZwuM+SCRjKeibJSp+umOOTQEx4hFUENod3yY7dY4a2sOx4TBaiKHOJwi2x7LnIPTEJyCMSrqCJDRd+KGAcDyvrgl757x7OGGA9Ni++eGNdnu3a2IEmTG+QiqGOr4DPFmCQz+d3x2+wLh2LesXfTwzMxyEYXfQHRJjHkEE720wPWEEY38ZH0GcyqYfVYLm8Y+ggtzwWyFflOCkdm/Z2pzEBl9tBNP9LIGOCN4JbNLWCiI90R2wpfykhRGcHE54b8HoyUSN/zR2v55IsDFNgv1+yGlEBKezRbsw9l0v6wSntEur9/iCHyIZkOBktWgTpFBg/BQBM9VvQfjGrm+IHk/Fjh2Rwb95NBhBMPUPI0u3x6lSCWYWPjqzM778DcnMxqcfvx+XC0fcmZUvI22NZfEGEIHZ+bqVMIZ4CpgHeVht7JD2Ru3fAGrWvjC7M1phhARnZ4rWcDyKzyCpBNN7MzaCCFuj21l48tsi9wffqFZSL7KFwGRQ3e1leILpwxklqHwJYnhPnDBPOiUzCMRQl80V+yR4NzTDBNFjm7vD5YsJ86x//XBBHmqn6MvwBUvo31ycIjkzvnZ35C+65M9eEoIwnrqQ1QDkl5m1Em2Q04PPVAAm/wmLISD3/dl4laBxNj21cyHdHmymgpNL9/F4caBvx08vrz0ExGj/n3w0By4hQbRxZp/JDTCW3asngv7WpwCxeQkcmXMg9LNYTM5aRmYgSL1DRvpSmcF2SNE7XScqIGbwu7+DQdy60yVkJMyXUom2QD7/K6Xk3dn+UHy/EL+c814Be+fyKtEW7NGdhJENXGYl2oLjdsMIiNlLaw+DXLrFhRt809FZRyTQGE8B6uTwq9AxjZAzTC0sBoT5JLP11RFcWPDubDNmAIA5HcjMdk70whBze9vp9Ml2fuvr5Icgh6LRaOiyu2lzzDHHHHPMMcccc8wxxxxzzDHHHHPMMcdXh/8H4uZuX4CPRXkAAAAASUVORK5CYII=" alt="" />
                </button>
              </div>

              {/* Telephone Field */}
              <div className="space-y-5">
                <div>
                  <label className="text-sm">Téléphone de contact</label>
                  <div className="flex gap-2 mt-1">
                    <select className="border rounded-lg px-3 border-[rgb(217,217,217)] outline-none">
                      <option>+225</option>
                      <option>+32</option>
                      <option>+354</option>
                    </select>
                    <input
                      type="text"
                      className="flex-1 p-2 border rounded-lg border-[rgb(217,217,217)] outline-none"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-snug">
                  Paiement sécurisé. Votre carte ne sera débitée qu'une fois votre billet émis.
                </p>

                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label className="text-xs text-gray-600">
                    J'accepte les Conditions tarifaires, les Conditions générales et la Politique de confidentialité.
                  </label>
                </div>
              </div>

              {/* Apple Pay Button */}
              <button  
                onClick={next} 
                className="w-full cursor-pointer bg-[rgb(255,78,0)] text-white flex justify-center items-center gap-3 py-3 rounded-lg mt-6">
                Payer
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white shadow rounded-lg p-5 h-fit">
            <h3 className="text-lg font-semibold mb-4">Récapitulatif de la commande</h3>

            <div className="border rounded-lg p-4 space-y-4 border-[rgb(217,217,217)]">
              <div className="flex justify-between">
                <span>Prix total</span>
                <span className="font-bold text-lg">10 000 F CFA</span>
              </div>

              <div className="text-sm text-gray-600">
                Comprend les taxes et frais. <br />
                Voir les détails de la commande.
              </div>
            </div>

            <button 
              onClick={next} 
              className="w-full cursor-pointer bg-[rgb(255,78,0)]  text-white font-semibold py-3 rounded-lg mt-5">
              Payer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}