import test from 'ava';
import m from '.';

const reject = (t, boolean) => {
	return t.throws(() => {
		m(boolean);
	}, TypeError).message;
};

test('Rejects', t => {
  const message = 'Expected correct hex value in three or six digit notation';

	t.is(reject(t, 0xFFC4), message);
  t.is(reject(t, ' '), message);
  t.is(reject(t, '9'), message);
  t.is(reject(t, '9F'), message);
  t.is(reject(t, '1234'), message);
  t.is(reject(t, '#CFCF'), message);
});

test('Converting hex code to RGB - object // 3 digit', t => {
	t.deepEqual(m('#01C'), { red: 0, green: 17, blue: 204 });
	t.deepEqual(m('#F52'), { red: 255, green: 85, blue: 34 });
	t.deepEqual(m('#DEF'), { red: 221, green: 238, blue: 255 });
	t.deepEqual(m('#940'), { red: 153, green: 68, blue: 0 });
	t.deepEqual(m('123'), { red: 17, green: 34, blue: 51 });
	t.deepEqual(m('C7D'), { red: 204, green: 119, blue: 221 });
	t.deepEqual(m('EDC'), { red: 238, green: 221, blue: 204 });
	t.deepEqual(m(0xA51), { red: 170, green: 85, blue: 17 });
	t.deepEqual(m(0xBA7), { red: 187, green: 170, blue: 119 });
});


test('Converting hex code to RGB - object // 6 digit', t => {
	t.deepEqual(m('#AC5A62'), { red: 172, green: 90, blue: 98 });
	t.deepEqual(m('#123456'), { red: 18, green: 52, blue: 86 });
	t.deepEqual(m('#9CF055'), { red: 156, green: 240, blue: 85 });
	t.deepEqual(m('D42AAA'), { red: 212, green: 42, blue: 170 });

  t.deepEqual(m('0F2F4F'), { red: 15, green: 47, blue: 79 });
	t.deepEqual(m('2C4C6B'), { red: 44, green: 76, blue: 107 });
	t.deepEqual(m('FFFFFF'), { red: 255, green: 255, blue: 255 });

  //t.deepEqual(m(0x0D8F5A), { red: 13, green: 143, blue: 90 });
	t.deepEqual(m(0x56EEFF), { red: 86, green: 238, blue: 255 });
	t.deepEqual(m(0x4456FF), { red: 68, green: 86, blue: 255 });
});

test('Converting hex code to RGB - array // mixed 3 & 6', t => {
	t.deepEqual(m('#1DEA23', true), [29, 234, 35]);
	t.deepEqual(m('#543C0F', true), [84, 60, 15]);
  t.deepEqual(m('0F3471', true), [15, 52, 113]);
  t.deepEqual(m('#C0A', true), [204, 0, 170]);
	t.deepEqual(m('#111', true), [17, 17, 17]);
  t.deepEqual(m(0xABC, true), [170, 187, 204]);
});
