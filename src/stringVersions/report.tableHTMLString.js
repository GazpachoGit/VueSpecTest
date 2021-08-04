export default `
<div>
    <div>Report preview</div>
    <div class="navigator">
      <button v-on:click="decrementPage()">&#8678;</button>
      <span> &nbsp; {{ currentPage }} of {{ numberOfPages() }} &nbsp;</span>
      <button v-on:click="incrementPage()">&#8680;</button>
    </div>
    <div class="navigator">
      <button v-on:click="insertBlankLineAfter()">&#8681;&#10010;</button>
      <button v-on:click="insertBlankLineBefore()">&#8679;&#10010;</button>
      <button v-on:click="deleteSelectedLine()">&#8680;&#10008;</button>
      <button v-on:click="shiftSelectedLineUp()">&#8679;</button>
      <button v-on:click="shiftSelectedLineDown()">&#8681;</button>
    </div>
    <table style="border: 1px solid black; padding: 0px" cellspacing="0">
      <!-- Table header -->
      <tr>
        <td class="verticalTableCell" cellspacing="0">Формат</td>
        <td class="verticalTableCell" cellspacing="0">Зона</td>
        <td class="verticalTableCell" cellspacing="0">Поз.</td>
        <td style="border: 1px solid black; text-align: center" cellspacing="0">
          Обозначение
        </td>
        <td style="border: 1px solid black; text-align: center" cellspacing="0">
          Наименование
        </td>
        <td style="border: 1px solid black; text-align: center" cellspacing="0">
          Кол.
        </td>
        <td style="border: 1px solid black; text-align: center" cellspacing="0">
          Приме-<br />чание
        </td>
        <td style="border: 1px solid black; text-align: center" cellspacing="0">
          row#
        </td>
        <td style="border: 1px solid black; text-align: center" cellspacing="0">
          page#
        </td>
        <td style="border: 1px solid black; text-align: center" cellspacing="0">
          uid
        </td>
      </tr>
      <template v-for="line in table.table">
        <tr
          v-if="line.page_number == currentPage"
          @click="rowClicked(line.row_number)"
          :key="line.row_number"
          :class="{ highlight: currentRow == line.row_number }"
        >
          <td class="cellFormat" cellspacing="0">{{ line.format }}</td>
          <td class="cellZone" cellspacing="0">{{ line.zone }}</td>
          <td class="cellPosition" cellspacing="0">{{ line.position }}</td>
          <td class="cellShifr" cellspacing="0">{{ line.shifr }}</td>
          <td class="cellName" cellspacing="0">{{ line.name }}</td>
          <td class="cellQuantity" cellspacing="0">{{ line.quantity }}</td>
          <td
            v-if="line.is_double_line != 'true'"
            class="cellNote"
            cellspacing="0"
          >
            {{ line.note }}
          </td>
          <td
            v-if="line.is_double_line == 'true'"
            class="cellNoteDLine"
            cellspacing="0"
          >
            {{ line.note }}
          </td>
          <td class="cellQuantity" cellspacing="0">{{ line.row_number }}</td>
          <td class="cellQuantity" cellspacing="0">{{ line.page_number }}</td>
          <td class="cellQuantity" cellspacing="0">{{ line.element_id }}</td>
        </tr>
      </template>
    </table>
    </div>
`;
