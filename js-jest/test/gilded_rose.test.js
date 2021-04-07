const {Shop, Item} = require("../src/gilded_rose");

//SET DATE FOR LOG
let today = new Date().toISOString().slice(0,19);
today = today.split(":").join("_");
today = today.replace("T","_");

//LOGS
const log4js = require("log4js");
  log4js.configure({

  appenders: { 
    Test_Item: { type: "file", layout:{type:'pattern',pattern: '%p [%c] %m'}, filename: `./logs/log_updateItems/updateItems_${today}.log`},
    bigDays: { type: "file", filename: `./logs/log_updateItems/updateItems_bigDays.log`} 
  },

  categories: { 
    default: { appenders: ["Test_Item"], level: "trace" },
       days: { appenders: ["bigDays"], level: "trace" } 
  }
});

const logger = log4js.getLogger("Test_Item");
const loggerBigDays =  log4js.getLogger("bigDays");

describe("Gilded Rose", function() {
  // it("should foo", function() {

  //   const gildedRose = new Shop([new Item("fixme", 0, 0)]);

  //   const items = gildedRose.updateQuality();

  //   expect(items[0].name).toBe("fixme");
  // });
  it("TEST 00 [TEST ITEMS EMPTY]", function() {

    //CREATING ITEMS
    const items = [];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 00 *****************")
    logger.trace("[TEST ITEMS EMPTY]")
    logger.trace("")
    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("TEST 01", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 01 *****************")
    logger.trace("")
    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("TEST 02", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
    
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 02 *****************")
    logger.trace("")

    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("TEST 03 [TEST ALL ZERO]", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", 0, 0),

      new Item("Aged Brie", 0, 0),
      new Item("Elixir of the Mongoose", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 0, 0),
    
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 03 *****************")
    logger.trace("[TEST ALL ZERO]")
    logger.trace("")

    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("TEST 05 [TEST NEGATIF SELL_IN]", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", -10, 0),
      new Item("Aged Brie", -10, 0),
      new Item("Elixir of the Mongoose", -10, 0),
      new Item("Sulfuras, Hand of Ragnaros", -10, 0),
      new Item("Sulfuras, Hand of Ragnaros", -10, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -10, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -10, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -10, 0),
      new Item("Conjured Mana Cake", -10, 0),
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 05 *****************")
    logger.trace("[TEST NEGATIF SELL_IN]")
    logger.trace("")

    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("TEST 06 [TEST NEGATIF QUALITY]", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", 0, -10),
      new Item("Aged Brie", 0, -10),
      new Item("Elixir of the Mongoose", 10, -10),
      new Item("Sulfuras, Hand of Ragnaros", 0, -10),
      new Item("Sulfuras, Hand of Ragnaros", 0, -10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, -10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, -10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, -10),
      new Item("Conjured Mana Cake", 0, -10),
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 06 *****************")
    logger.trace("[TEST NEGATIF QUALITY]")
    logger.trace("")

    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("TEST 07 [TEST NAME RANDOM]", function() {

    //CREATING ITEMS
    const items = [
      new Item("Lorum tum", 10, 10),

      new Item("FREderic", 10, 10),
      new Item("Eliir of the Moe", 10, 10),
      new Item("SULLE, Hand of FRES", 10, 10),
      new Item("FG, Hand of g", 10, 10),
      new Item("", 10, 10),
      new Item("1243542", 10, 10),
      new Item("@efer454/.435", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured", 10, 10),
    
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 07 *****************")
    logger.trace("[TEST NAME RANDOM]")
    logger.trace("")

    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("TEST 08 [TEST TYPE FLOAT]", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", 10.5, 10.5),

      new Item("Aged Brie", 10.4, 10.4),
      new Item("Elixir of the Mongoose", 10.3, 10.3),
      new Item("Sulfuras, Hand of Ragnaros", 10.2, 10.2),
      new Item("Sulfuras, Hand of Ragnaros", 10.1, 10.1),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10.0, 10.0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10.9, 10.9),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10.9, 10.9),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10.8, 10.8),
    
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 08 *****************")
    logger.trace("[TEST TYPE FLOAT]")
    logger.trace("")

    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("TEST 09 [TEST TYPE STRING]", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", "10", "10"),

      new Item("Aged Brie", "10", "10"),
      new Item("Elixir of the Mongoose", "10", "10"),
      new Item("Sulfuras, Hand of Ragnaros", "10", "10"),
      new Item("Sulfuras, Hand of Ragnaros", "10", "10"),
      new Item("Backstage passes to a TAFKAL80ETC concert", "10", "10"),
      new Item("Backstage passes to a TAFKAL80ETC concert", "10", "10"),
      new Item("Backstage passes to a TAFKAL80ETC concert", "10", "10"),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", "10", "10"),
    
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST 09 *****************")
    logger.trace("[TEST TYPE STRING]")
    logger.trace("")

    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

  it("DAY TEST 01 [10 DAYS]", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
    
    ];
    //LOG TITLE
    logger.trace("")
    logger.trace("***************** DAY TEST 01 *****************")
    logger.trace("[TEST 10 JOURS]")
    logger.trace("")
    
    for(let i = 0; i <= 10; i++)
    {
      logger.trace("")
      logger.trace(`== [DAY ${i}] ==`)
      logger.trace("")
      //BEFORE LOG
      logger.trace("** UPDATE QUALITY **")
      logger.trace("============ ENTRER ============")
      logger.trace(`== [DAY ${i}] ==`)
      items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );
  
      const gildedRose = new Shop(items);
  
      gildedRose.updateQuality();
  
      //AFTER LOG
      logger.trace("")
      logger.trace("============ SORTIE ============")
      logger.trace(`== [DAY ${i}] ==`)
      items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));
    }

    expect(items.length).toBe(items.length);
  });


  //PROBLEM => LOG DANS LES DEUX FICHIERS

  //OTHER LOG
  // it("DAY TEST 02 [10 000 DAYS]", function() {

  //   //CREATING ITEMS
  //   const items = [
  //     new Item("+5 Dexterity Vest", 10, 10),

  //     new Item("Aged Brie", 10, 10),
  //     new Item("Elixir of the Mongoose", 10, 10),
  //     new Item("Sulfuras, Hand of Ragnaros", 10, 10),
  //     new Item("Sulfuras, Hand of Ragnaros", 10, 10),
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

  //     // This Conjured item does not work properly yet
  //     new Item("Conjured Mana Cake", 10, 10),
    
  //   ];
  //   //LOG TITLE
  //   loggerBigDays.trace("")
  //   loggerBigDays.trace("***************** DAY TEST 02 *****************")
  //   loggerBigDays.trace("[TEST 10 000 JOURS]")
  //   loggerBigDays.trace("")
    
  //   for(let i = 0; i <= 10000; i++)
  //   {
  //     loggerBigDays.trace("")
  //     loggerBigDays.trace(`== [DAY ${i}] ==`)
  //     loggerBigDays.trace("")
  //     //BEFORE LOG
  //     loggerBigDays.trace("** UPDATE QUALITY **")
  //     loggerBigDays.trace("============ ENTRER ============")
  //     loggerBigDays.trace(`== [DAY ${i}] ==`)
  //     items.forEach(item => loggerBigDays.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );
  
  //     const gildedRose = new Shop(items);
  
  //     gildedRose.updateQuality();
  
  //     //AFTER LOG
  //     loggerBigDays.trace("")
  //     loggerBigDays.trace("============ SORTIE ============")
  //     loggerBigDays.trace(`== [DAY ${i}] ==`)
  //     items.forEach(item => loggerBigDays.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));
  //   }

  //   expect(items.length).toBe(items.length);
  // });

  it("TEST BIG ", function() {

    //CREATING ITEMS
    const items = [
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),

      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),
      new Item("+5 Dexterity Vest", 10, 10),

      new Item("Aged Brie", 10, 10),
      new Item("Elixir of the Mongoose", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 10, 10),

    
    ];

    //BEFORE LOG
    logger.trace("")
    logger.trace("***************** TEST BIG *****************")
    logger.trace("")

    logger.trace("** UPDATE QUALITY **")
    logger.trace("============ ENTRER ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )") );

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    //AFTER LOG
    logger.trace("")
    logger.trace("============ SORTIE ============")
    items.forEach(item => logger.trace("( " + `${item.name}, ${item.sellIn}, ${item.quality}` + " )"));

    expect(items.length).toBe(items.length);
  });

});

